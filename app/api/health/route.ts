import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://98.92.226.19:8000";

export async function GET() {
  try {
    const response = await axios.get(`${API_URL}/health`);
    return Response.json(response.data);
  } catch (error: any) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
