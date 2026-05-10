import { useState } from "react";
import {
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <p className="text-gray-400 mt-1 text-sm">{label}</p>
    </div>
  );
};

const SocialButton = ({ icon, text }) => {
  return (
    <button
      className="w-full flex items-center justify-center gap-2 
      bg-white/5 border border-white/10 rounded-xl py-3
      hover:bg-purple-500/10 hover:border-purple-500/40
      transition-all duration-300"
    >
      {icon}
      <span className="text-sm text-gray-300">{text}</span>
    </button>
  );
};

const InputField = ({
  label,
  type,
  placeholder,
  icon,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>
      <label className="text-xs tracking-wider text-gray-400 uppercase">
        {label}
      </label>

      <div
        className="mt-2 flex items-center gap-3 bg-white/5 
        border border-white/10 rounded-xl px-4 py-3
        focus-within:border-purple-500 transition"
      >
        {icon}

        <input
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-500"
        />

        {type === "password" && (
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={18} className="text-gray-400" />
            ) : (
              <Eye size={18} className="text-gray-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen py-10 bg-[#070B1A] text-white flex items-center justify-center px-6 py-4 overflow-hidden p-20">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-[30px]  ">
        
        {/* LEFT SIDE */}
        <div
          className="relative rounded-[32px] overflow-hidden
          border border-white/10 bg-[#120B2E]
          p-7 flex flex-col justify-between"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_55%)]"></div>

          {/* Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl 
                bg-gradient-to-r from-purple-600 to-indigo-600
                flex items-center justify-center shadow-lg shadow-purple-500/30"
              >
                <Shield size={22} />
              </div>

              <h1 className="text-3xl font-bold">ShieldAI</h1>
            </div>

            {/* Heading */}
            <div className="mt-10">
              <h2 className="text-5xl font-bold leading-tight">
                Welcome back.
              </h2>

              <h2
                className="text-5xl font-bold mt-2 
                bg-gradient-to-r from-purple-400 to-indigo-500
                bg-clip-text text-transparent"
              >
                Your art is safe.
              </h2>

              <p className="text-gray-400 mt-6 leading-relaxed max-w-lg">
                Sign in to manage your protected images, monitor tamper
                detection logs, and keep your creative work safe from AI
                scraping and unauthorized editing.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <StatCard value="12k+" label="Creators" />
              <StatCard value="340k+" label="Images Protected" />
              <StatCard value="99.8%" label="Accuracy" />
            </div>
          </div>

          {/* Bottom Review */}
          <div
            className="relative z-10 bg-white/5 border border-white/10
            rounded-3xl p-4 backdrop-blur-md"
          >
            <p className="text-gray-300 italic leading-relaxed">
              "ShieldAI helped me secure my portfolio from AI scraping and
              unauthorized modifications. A must-have platform for digital
              creators."
            </p>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-purple-600
                  flex items-center justify-center font-semibold"
                >
                  J
                </div>

                <div>
                  <h4 className="font-semibold">James K.</h4>
                  <p className="text-sm text-gray-400">
                    Professional Photographer
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-yellow-400"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="rounded-[32px] border border-white/10
          bg-[#0A1022] bg-[#0A1022] p-7 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold">
                Sign in to your account
              </h2>

              <p className="text-gray-400 mt-3">
                Access your protected images and dashboard settings.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              <SocialButton
                text="GitHub"
                icon={<img
  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  alt="github"
  className="w-5 h-5"
/>}
              />

              <SocialButton
                text="Google"
                icon={
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                }
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-px bg-white/10 w-full"></div>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                or continue with email
              </span>
              <div className="h-px bg-white/10 w-full"></div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <InputField
                label="Email Address"
                type="email"
                placeholder="artist@example.com"
                icon={<Mail size={18} className="text-gray-400" />}
              />

              <InputField
                label="Password"
                type="password"
                placeholder="••••••••••"
                icon={<Lock size={18} className="text-gray-400" />}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between mt-5">
              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" className="accent-purple-600" />
                Remember me
              </label>

              <button className="text-sm text-purple-400 hover:text-purple-300">
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <button
              className="w-full mt-5 py-3 rounded-2xl
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:opacity-90 transition-all duration-300
              font-semibold text-lg shadow-xl shadow-purple-500/20
              flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={20} />
            </button>

            {/* Footer */}
            <p className="text-center text-gray-400 mt-6">
              Don’t have an account?{" "}
              <span className="text-purple-400 cursor-pointer hover:text-purple-300">
                Create one free
              </span>
            </p>

            <div className="mt-10 text-center text-xs text-gray-500">
              256-bit encrypted • Zero data retention • GDPR compliant
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}