import React from "react";
import Link from "next/link";
import { Mail, Lock, LogIn } from "lucide-react";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
        <div className="hidden lg:flex bg-slate-900 p-16 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative z-10">
            <Link
              href="/"
              className="text-2xl font-black text-white tracking-tighter"
            >
              Food<span className="text-orange-500">Express.</span>
            </Link>
            <h2 className="text-4xl font-black text-white mt-20 leading-tight">
              Welcome Back to the <br />
              <span className="text-orange-500">Flavor Network.</span>
            </h2>
          </div>

          <div className="relative z-10">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
              Premium Food Experience
            </p>
          </div>
        </div>

        <div className="p-8 md:p-16">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 mb-2">
                Sign In
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                Enter your details to access your account
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                  Email Address
                </label>
                <div className="relative border-b-2 border-gray-100 focus-within:border-orange-500 transition-all">
                  <Mail
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-8 pr-4 py-4 bg-transparent outline-none font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Password
                </label>
                <div className="relative border-b-2 border-gray-100 focus-within:border-orange-500 transition-all">
                  <Lock
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-8 pr-4 py-4 bg-transparent outline-none font-medium"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 uppercase text-sm tracking-widest">
                  Login <LogIn size={18} />
                </button>
              </div>
            </div>

            <div className="relative my-10 flex items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Or
              </span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-2 py-4 border border-gray-100 rounded-2xl font-bold text-slate-700 text-xs uppercase tracking-wider cursor-default">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </div>
            </div>

            <p className="text-center mt-12 text-gray-500 font-medium">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-orange-500 font-black hover:underline underline-offset-4"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
