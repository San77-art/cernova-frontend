module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/auth/register/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcrypt$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs, [project]/node_modules/bcrypt)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/jwt.ts [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@prisma/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const prisma = new PrismaClient();
const SALT_ROUNDS = 12;
async function POST(req) {
    try {
        const { email, password, name } = await req.json();
        if (!email || !password || password.length < 8) {
            return Response.json({
                error: "Email e senha (min 8 chars) obrigatorios"
            }, {
                status: 400
            });
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            return Response.json({
                error: "Email ja cadastrado"
            }, {
                status: 409
            });
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcrypt$29$__["default"].hash(password, SALT_ROUNDS);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: name || email.split("@")[0]
            }
        });
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateJWT"])(user.id);
        return Response.json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Register error:", error);
        return Response.json({
            error: "Erro ao cadastrar"
        }, {
            status: 500
        });
    }
}
}),
"[project]/lib/jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateJWT",
    ()=>generateJWT,
    "verifyJWT",
    ()=>verifyJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const JWT_SECRET = process.env.NEXTAUTH_SECRET || "dev-secret-change-me";
const JWT_EXPIRES_IN = "24h";
function generateJWT(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign({
        sub: userId,
        iat: Math.floor(Date.now() / 1000)
    }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
        algorithm: "HS256"
    });
}
function verifyJWT(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET, {
            algorithms: [
                "HS256"
            ]
        });
    } catch (error) {
        return null;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0x5a4pk._.js.map