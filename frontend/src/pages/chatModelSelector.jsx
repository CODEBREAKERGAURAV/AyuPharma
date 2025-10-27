// import React, { useState } from "react";
// import { ChevronDown, Check } from "lucide-react"; // icons

// const ChatModelSelector = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedModel, setSelectedModel] = useState("ChatGPT");

//   const models = [
//     { name: "ChatGPT Go", desc: "Our smartest model & more", upgrade: true },
//     { name: "ChatGPT", desc: "Great for everyday tasks", upgrade: false },
//   ];

//   return (
//     <div className="relative inline-block text-left">
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center justify-between w-48 px-4 py-2 bg-zinc-800 text-white rounded-md shadow hover:bg-zinc-700"
//       >
//         {selectedModel}
//         <ChevronDown className="ml-2 h-4 w-4" />
//       </button>

//       {/* Dropdown Menu */}
//       {open && (
//         <div className="absolute mt-2 w-64 bg-zinc-900 text-white rounded-lg shadow-lg p-2 space-y-1 z-20">
//           {models.map((model) => (
//             <div
//               key={model.name}
//               onClick={() => {
//                 if (!model.upgrade) {
//                   setSelectedModel(model.name);
//                   setOpen(false);
//                 }
//               }}
//               className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-zinc-800 cursor-pointer"
//             >
//               <div>
//                 <p className="font-medium">{model.name}</p>
//                 <p className="text-xs text-zinc-400">{model.desc}</p>
//               </div>

//               {model.upgrade ? (
//                 <button className="px-2 py-1 bg-zinc-700 text-xs rounded-md hover:bg-zinc-600">
//                   Upgrade
//                 </button>
//               ) : selectedModel === model.name ? (
//                 <Check className="h-4 w-4 text-blue-400" />
//               ) : null}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatModelSelector;
