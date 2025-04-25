import { Send, Settings, TrendingUp } from "lucide-react";
import CircularProgress from "./CircularProgress";
import Image from "next/image";

export default function House() {
  return (
    <div className="min-h-screen">
      <div className="w-full flex items-center justify-between text-black py-3 px-4 bg-white">
        <div className="text-lg font-semibold">Dashboard Overview</div>

        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Image
            src="https://wallpapers.com/images/file/professional-profile-pictures-4162-x-6243-ds59e3wn0uignqdp.jpg"
            alt="User Profile"
            width={32}
                    height={32}
            className="w-9 h-9 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
      </div>
      {/* Card 1: Account Progress*/}
      <div className="text-black space-y-8 pt-5 mx-5 mb-7 px-4 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center space-y-3">
            <h3 className="text-xl font-semibold">Account Progress</h3>
            <CircularProgress percentage={85} />

            <div className="grid gap-4 w-full text-sm font-medium text-gray-700">
              <div className="bg-gray-200 rounded-md p-4">
                <p className="mb-2 text-gray-800">Steps Completed: 3/5</p>

                {["Profile Setup", "Verification", "Documents Uploaded"].map(
                  (step) => (
                    <div
                      key={step}
                      className="flex items-center justify-between bg-white px-4 py-2 rounded shadow-sm"
                    >
                      <p>{step}</p>
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="bg-gray-200 rounded-md p-4">
                <p className="mb-2 text-gray-800">Steps Remaining: 2/5</p>
                {["Approval Pending", "Final Confirmation"].map((step) => (
                  <div
                    key={step}
                    className="flex items-center justify-between bg-white px-4 py-2 rounded shadow-sm"
                  >
                    <p>{step}</p>
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400/75">
                      <span className="text-black text-xs">-</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Franchisee Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-3">
            <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm mx-auto">
              <h3 className="font-semibold text-base text-gray-800 mb-2">
                Total Franchisees Onboard
              </h3>

              <div className="flex items-center justify-between gap-4 relative">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">14</span>
                  <span className="text-green-600 flex items-center border-green-600 border-2 rounded-2xl px-2 text-sm font-medium ml-4">
                    <TrendingUp className="w-3 h-3" size={14} />
                    7.4%
                  </span>
                </div>

                <div className="flex items-center space-x-[-8px] absolute right-0">
                  <Image
                    src="https://wallpapers.com/images/file/professional-profile-pictures-4162-x-6243-ds59e3wn0uignqdp.jpg"
                    alt="User 1"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://tse1.mm.bing.net/th?id=OIP.qADy_l5yGg8j-5jZapJZ2QHaE8&pid=Api&P=0&h=180"
                    alt="User 2"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://wallpapers.com/images/file/professional-profile-pictures-4162-x-6243-ds59e3wn0uignqdp.jpg"
                    alt="User 3"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://tse1.mm.bing.net/th?id=OIP.qADy_l5yGg8j-5jZapJZ2QHaE8&pid=Api&P=0&h=180"
                    alt="User 4"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />

                  <div className="w-8 h-8 rounded-full bg-gray-300 text-xs text-gray-700 flex items-center justify-center font-semibold border-2 border-white">
                    +7
                  </div>
                </div>
              </div>
            </div>

            <div className="text-gray-700 space-y-4 mt-7">
              <div>
                <div className="flex justify-between items-center w-full">
                  <p className="mb-1">Stage 1: (Intial Query)</p>
                  <span className="text-sm font-semibold">2</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div
                    className="bg-black h-3 rounded-full"
                    style={{ width: `${(2 / 14) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center w-full">
                  <p className="mb-1">Stage 2: (Documents Submission)</p>
                  <span className="text-sm font-semibold">7</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div
                    className="bg-black h-3 rounded-full"
                    style={{ width: `${(7 / 14) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center w-full">
                  <p className="mb-1">Stage 3: (Training)</p>
                  <span className="text-sm font-semibold">5</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div
                    className="bg-black h-3 rounded-full"
                    style={{ width: `${(5 / 14) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="pt-2 mt-10 bg-gray-100 p-4 rounded-lg text-sm text-gray-700 w-full max-w-md mx-auto">
              <div>
                <p className="text-base font-medium mb-2">
                  Financial Wellbeing
                </p>

                <div className="flex justify-between items-end mb-1">
                  <div className="text-4xl font-bold">20</div>
                  <div className="border-2 border-green-600 flex space-x-2 px-2 rounded-xl">
                    <TrendingUp className="text-green-600 w-3 h-5" />
                    <span className="font-bold text-green-600">2.1%</span>
                  </div>
                </div>

                <span className="text-xs font-light text-gray-500">
                  Total Franchisees
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                <div className="flex-1 px-4 py-3 text-center rounded-md bg-white shadow-sm">
                  <p className="text-sm text-gray-600">Target</p>
                  <p className="text-base font-semibold text-gray-800">
                    $500,000
                  </p>
                </div>
                <div className="flex-1 px-4 py-3 text-center rounded-md bg-white shadow-sm">
                  <p className="text-sm text-gray-600">Current</p>
                  <p className="text-base font-semibold text-gray-800">
                    $450,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 text-sm sm:text-base">
            <h3 className="text-xl font-semibold">Key Insights & Feedback</h3>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-4xl font-extrabold text-black">
                <span>10%</span>
                <div className="justify-center flex items-center space-x-3">
                  <Image
                    src="https://tse1.mm.bing.net/th?id=OIP.qADy_l5yGg8j-5jZapJZ2QHaE8&pid=Api&P=0&h=180"
                    alt="Top Performer"
                    width={32}
                    height={32}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <span className="text-[12px] font-extralight border-gray-500 border-2 rounded-2xl px-2 py-1 text-gray-500">
                    Top Performer
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Sales growth</p>
            </div>

            <div className="flex items-center space-x-3"></div>

            <div className="bg-gray-200 p-4 rounded-lg mt-4">
              <h4 className="text-md font-semibold mb-2 text-gray-800">
                Feedback
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Great engagement from the sales team this quarter. Keep up the
                momentum!
              </p>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-3 text-gray-800">
                Prospect Leads
              </h4>
              <div className="flex items-center space-x-4 bg-gray-200 p-3 rounded-lg">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Lead Profile"
                  width={32}
                    height={32}
                  className="w-10 h-10 rounded-full border object-cover"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  <span className="font-medium text-gray-900">Awa Wright</span>
                  <span className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-0">
                    Stage: Intial Inquery
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-1 bg-gray-200 p-3 rounded-lg">
                <Image
                  src="https://tse4.mm.bing.net/th?id=OIP.dQxgs2Jx3CnfmQG3Wmy-egHaE8&pid=Api&P=0&h=180"
                  alt="Lead Profile"
                  width={32}
                    height={32}
                  className="w-10 h-10 rounded-full border object-cover"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  <span className="font-medium text-gray-900">Code Fisher</span>
                  <span className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-0">
                    Stage: Intial Inquery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/*Card 3: Pending Questions */}
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
            <h3 className="text-xl font-semibold">Pending Questions</h3>
            <ul className="space-y-4 text-sm">
              {[
                {
                  name: "John Smith",
                  org: "Tech Corp",
                  time: "2h ago",
                  msg: "How can we improve our onboarding process?",
                  img:
                    "https://tse1.mm.bing.net/th?id=OIP.qADy_l5yGg8j-5jZapJZ2QHaE8&pid=Api&P=0&h=180",
                },
                {
                  name: "Sarah Wilson",
                  org: "Digital Solutions",
                  time: "4h ago",
                  msg: "What are the next steps for integration?",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Mike Johnson",
                  org: "Innovation Ltd",
                  time: "6h ago",
                  msg: "Can we schedule a review meeting?",
                  img:
                    "https://tse1.mm.bing.net/th?id=OIP.kLuVl7_2soHqjgecM56X2AHaLL&pid=Api&P=0&h=180",
                },
              ].map(({ name, org, time, msg, img }) => (
                <li key={name} className="flex items-start space-x-4">
                  <Image
                    src={img}
                    alt={name}
                    width={32}
                    height={32}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">
                      {name}
                      <span className="text-gray-400 text-xs ml-2">
                        {org} - {time}
                      </span>
                    </p>
                    <p>{msg}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Assistant */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Welcome to AI Chat Assistant
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Im here to help answer your questions and assist with your
                tasks. Feel free to ask me anything!
              </p>
            </div>
            <div className="mt-auto flex rounded-md overflow-hidden border border-gray-300">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-1 px-4 py-2 focus:outline-none"
              />
              <div className="bg-black flex justify-center items-center h-10 w-13 text-white">
                <Send size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
