import { NextRequest, NextResponse } from "next/server";
import {
  checkPasscode,
  createSessionToken,
  verifySessionToken,
  COOKIE_NAME,
  MAX_AGE_SECONDS,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const passcode = body.passcode;

    if (!passcode || !checkPasscode(passcode)) {
      return NextResponse.json(
        { success: false, error: "访问口令不正确" },
        { status: 401 }
      );
    }

    const token = await createSessionToken();
    const isProd = process.env.NODE_ENV === "production";

    const response = NextResponse.json({
      success: true,
      message: "认证成功",
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      maxAge: MAX_AGE_SECONDS,
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "认证服务异常" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  const isValid = await verifySessionToken(cookie);
  return NextResponse.json({ authenticated: isValid });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "已退出" });
  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });
  return response;
}
