import { getCookie } from "@/lib/action";
import { httpExternal } from "@/lib/http";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const { data } = await httpExternal.get<{
//       message: string;
//     }>("/auth/getcookie", {
//       headers: getCookie(),
//     });

//     return NextResponse.json(data, { status: 200 });
//   } catch (error: any) {
//     console.log(error);
//     return NextResponse.json({ ok: "something went wrong" }, { status: 500 });
//   }
// }

export async function GET(req: NextRequest) {
  try {
    const { data, headers } = await httpExternal.post<{
      message: string;
    }>("/auth/setcookie");

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Set-Cookie": headers["set-cookie"]
          ? headers["set-cookie"].map((c) => c + ",").join()
          : "",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ ok: "something went wrong" }, { status: 500 });
  }
}
