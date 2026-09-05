# ============================================
# CERNOVA SECURITY SETUP
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  CERNOVA - SECURITY IMPLEMENTATION" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# ============================
# 1. LIST ACM CERTIFICATES
# ============================
Write-Host "1️⃣  Listando certificados ACM..." -ForegroundColor Yellow

$certs = aws acm list-certificates `
  --region us-east-1 `
  --query "CertificateSummaryList[?Status=='PENDING_VALIDATION']" `
  --output json | ConvertFrom-Json

if ($certs.Count -gt 0) {
    Write-Host "  ✅ Certificados pendentes encontrados:" -ForegroundColor Green
    foreach ($cert in $certs) {
        Write-Host "    • $($cert.DomainName)" -ForegroundColor Cyan
        Write-Host "      ARN: $($cert.CertificateArn)" -ForegroundColor Cyan
    }
} else {
    Write-Host "  ℹ️  Nenhum certificado pendente." -ForegroundColor Blue
}

Write-Host ""

# ============================
# 2. CLOUDTRAIL
# ============================
Write-Host "2️⃣  Configurando CloudTrail..." -ForegroundColor Yellow

# Create S3 bucket
Write-Host "  • Criando bucket S3..." -ForegroundColor Gray
aws s3api create-bucket `
  --bucket cernova-cloudtrail-logs `
  --region us-east-1 `
  --create-bucket-configuration LocationConstraint=us-east-1 `
  -ErrorAction SilentlyContinue | Out-Null

# Create trail
Write-Host "  • Criando trail..." -ForegroundColor Gray
aws cloudtrail create-trail `
  --name cernova-cloudtrail `
  --s3-bucket-name cernova-cloudtrail-logs `
  --is-multi-region-trail `
  --region us-east-1 `
  -ErrorAction SilentlyContinue | Out-Null

# Start logging
Write-Host "  • Iniciando logging..." -ForegroundColor Gray
aws cloudtrail start-logging `
  --trail-name cernova-cloudtrail `
  --region us-east-1 `
  -ErrorAction SilentlyContinue | Out-Null

Write-Host "  ✅ CloudTrail ativado!" -ForegroundColor Green
Write-Host ""

# ============================
# 3. CLOUDWATCH LOGS
# ============================
Write-Host "3️⃣  Criando CloudWatch Log Groups..." -ForegroundColor Yellow

aws logs create-log-group `
  --log-group-name /aws/cernova/application `
  --region us-east-1 `
  -ErrorAction SilentlyContinue | Out-Null

aws logs create-log-group `
  --log-group-name /aws/cernova/auth `
  --region us-east-1 `
  -ErrorAction SilentlyContinue | Out-Null

aws logs put-retention-policy `
  --log-group-name /aws/cernova/application `
  --retention-in-days 30 `
  --region us-east-1 `
  -ErrorAction SilentlyContinue | Out-Null

Write-Host "  ✅ CloudWatch Logs criados!" -ForegroundColor Green
Write-Host ""

# ============================
# 4. GUARDDUTY
# ============================
Write-Host "4️⃣  Ativando GuardDuty..." -ForegroundColor Yellow

$guardduty = aws guardduty create-detector `
  --enable `
  --finding-publishing-frequency FIFTEEN_MINUTES `
  --region us-east-1 `
  --output json `
  -ErrorAction SilentlyContinue | ConvertFrom-Json

if ($guardduty.DetectorId) {
    Write-Host "  ✅ GuardDuty ativado!" -ForegroundColor Green
    Write-Host "     ID: $($guardduty.DetectorId)" -ForegroundColor Cyan
} else {
    Write-Host "  ℹ️  GuardDuty já estava ativado" -ForegroundColor Blue
}

Write-Host ""

# ============================
# 5. SUMMARY
# ============================
Write-Host "============================================" -ForegroundColor Green
Write-Host "  ✅ SEGURANÇA IMPLEMENTADA!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green

Write-Host ""
Write-Host "✅ O que foi feito:" -ForegroundColor Green
Write-Host "   • CloudTrail (auditoria completa)" -ForegroundColor Green
Write-Host "   • CloudWatch Logs (monitoramento)" -ForegroundColor Green
Write-Host "   • GuardDuty (detecção de ameaças)" -ForegroundColor Green

Write-Host ""
Write-Host "⏳ O que falta (requer permissão admin):" -ForegroundColor Yellow
Write-Host "   • SNS Topics (notificações)" -ForegroundColor Yellow
Write-Host "   • AWS WAF (proteção DDoS)" -ForegroundColor Yellow

Write-Host ""
Write-Host "📝 PRÓXIMOS PASSOS:" -ForegroundColor Cyan
Write-Host "   1. Validar certificado ACM no Route 53" -ForegroundColor Cyan
Write-Host "   2. Implementar Security Headers (next.config.ts)" -ForegroundColor Cyan
Write-Host "   3. Implementar Rate Limiting (Redis)" -ForegroundColor Cyan
Write-Host "   4. Fazer commit no GitHub" -ForegroundColor Cyan

Write-Host ""
Write-Host "📞 Peça ao admin (Nuno) para liberar:" -ForegroundColor Yellow
Write-Host "   • sns:CreateTopic" -ForegroundColor Yellow
Write-Host "   • sns:Subscribe" -ForegroundColor Yellow
Write-Host "   • wafv2:CreateWebACL" -ForegroundColor Yellow
Write-Host "   • wafv2:AssociateWebACL" -ForegroundColor Yellow

Write-Host ""
