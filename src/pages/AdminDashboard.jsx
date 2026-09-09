// import React, { useEffect, useState } from "react"
// import {
//     HiOutlineHome,
//     HiOutlineUsers,
//     HiOutlineCollection,
//     HiOutlineLogout,
//     HiOutlineMenu,
//     HiOutlineX,
//     HiOutlinePlus,
//     HiOutlinePencil,
//     HiOutlineTrash,
//     HiOutlineSearch
// } from "react-icons/hi"
// import { useNavigate } from "react-router-dom"
// import API from "../api/api"

// function AdminDashboard() {

//     const navigate = useNavigate()

//     const [sidebarOpen, setSidebarOpen] = useState(false)
//     const [activeTab, setActiveTab] = useState("dashboard")

//     const [pastoralTeam, setPastoralTeam] = useState([])
//     const [sermons, setSermons] = useState([])

//     const [loading, setLoading] = useState(true)

//     const [showModal, setShowModal] = useState(false)
//     const [modalType, setModalType] = useState("")
//     const [editingItem, setEditingItem] = useState(null)

//     const [search, setSearch] = useState("")

//     const [formData, setFormData] = useState({
//         name: "",
//         position: "",
//         img: null,
//         desc: "",
//         sub: "",
//         pastor: "",
//         button: "Watch Sermon"
//     })

//     const [message, setMessage] = useState("")
//     const [error, setError] = useState("")

//     useEffect(() => {
//         const token = localStorage.getItem("adminToken")

//         if (!token) {
//             navigate("/admin/login")
//             return
//         }

//         fetchData()
//     }, [])

//     const fetchData = async () => {

//         try {

//             setLoading(true)

//             const [
//                 pastoralResponse,
//                 sermonResponse
//             ] = await Promise.all([
//                 API.get("/api/pastoral"),
//                 API.get("/api/sermons")
//             ])

//             setPastoralTeam(
//                 pastoralResponse.data.data || []
//             )

//             setSermons(
//                 sermonResponse.data.data || []
//             )

//         } catch (error) {

//             if (error.response?.status === 401) {
//                 localStorage.removeItem("adminToken")
//                 navigate("/admin/login")
//                 return
//             }

//             setError(
//                 error.response?.data?.message ||
//                 "Failed to load dashboard"
//             )

//         } finally {
//             setLoading(false)
//         }
//     }

//     const logout = () => {
//         localStorage.removeItem("adminToken")
//         navigate("/admin/login")
//     }

//     const openAddModal = (type) => {

//         setModalType(type)
//         setEditingItem(null)

//         setFormData({
//             name: "",
//             position: "",
//             img: "",
//             desc: "",
//             sub: "",
//             pastor: "",
//             button: "Watch Sermon"
//         })

//         setShowModal(true)
//     }

//     const openEditModal = (type, item) => {

//         setModalType(type)
//         setEditingItem(item)

//         setFormData({
//             name: item.name || "",
//             position: item.position || "",
//             img: item.img || "",
//             desc: item.desc || "",
//             sub: item.sub || "",
//             pastor: item.pastor || "",
//             button: item.button || "Watch Sermon"
//         })

//         setShowModal(true)
//     }

//     const closeModal = () => {
//         setShowModal(false)
//         setEditingItem(null)
//     }

//     // const handleChange = (e) => {

//     //     setFormData({
//     //         ...formData,
//     //         [e.target.name]: e.target.value
//     //     })
//     // }

//     const handleChange = (e) => {
//         const { name, value, files } = e.target

//         setFormData({
//             ...formData,
//             [name]: files ? files[0] : value
//         })
//     }

//     const saveItem = async (e) => {

//         e.preventDefault()

//         setMessage("")
//         setError("")

//         try {

//             if (modalType === "pastoral") {

//                 if (editingItem) {

//                     await API.put(
//                         `/api/pastoral/${editingItem._id}`,
//                         {
//                             name: formData.name,
//                             position: formData.position,
//                             img: formData.img,
//                             desc: formData.desc
//                         }
//                     )

//                     setMessage(
//                         "Pastoral member updated successfully"
//                     )

//                 } else {

//                     await API.post(
//                         "/api/pastoral",
//                         {
//                             name: formData.name,
//                             position: formData.position,
//                             img: formData.img,
//                             desc: formData.desc
//                         }
//                     )

//                     setMessage(
//                         "Pastoral member added successfully"
//                     )
//                 }

//             } else {

//                 if (editingItem) {

//                     await API.put(
//                         `/api/sermons/${editingItem._id}`,
//                         {
//                             name: formData.name,
//                             sub: formData.sub,
//                             pastor: formData.pastor,
//                             img: formData.img,
//                             button: formData.button
//                         }
//                     )

//                     setMessage(
//                         "Sermon updated successfully"
//                     )

//                 } else {

//                     await API.post(
//                         "/api/sermons",
//                         {
//                             name: formData.name,
//                             sub: formData.sub,
//                             pastor: formData.pastor,
//                             img: formData.img,
//                             button: formData.button
//                         }
//                     )

//                     setMessage(
//                         "Sermon added successfully"
//                     )
//                 }
//             }

//             closeModal()
//             await fetchData()

//         } catch (error) {

//             setError(
//                 error.response?.data?.message ||
//                 "Operation failed"
//             )
//         }
//     }

//     const deleteItem = async (type, id) => {

//         const confirmDelete = window.confirm(
//             "Are you sure you want to delete this item?"
//         )

//         if (!confirmDelete) return

//         try {

//             if (type === "pastoral") {

//                 await API.delete(
//                     `/api/pastoral/${id}`
//                 )

//                 setMessage(
//                     "Pastoral member deleted"
//                 )

//             } else {

//                 await API.delete(
//                     `/api/sermons/${id}`
//                 )

//                 setMessage(
//                     "Sermon deleted"
//                 )
//             }

//             await fetchData()

//         } catch (error) {

//             setError(
//                 error.response?.data?.message ||
//                 "Delete failed"
//             )
//         }
//     }

//     const filteredPastoral = pastoralTeam.filter(
//         (item) =>
//             item.name
//                 ?.toLowerCase()
//                 .includes(search.toLowerCase()) ||
//             item.position
//                 ?.toLowerCase()
//                 .includes(search.toLowerCase())
//     )

//     const filteredSermons = sermons.filter(
//         (item) =>
//             item.name
//                 ?.toLowerCase()
//                 .includes(search.toLowerCase()) ||
//             item.pastor
//                 ?.toLowerCase()
//                 .includes(search.toLowerCase())
//     )

//     return (
//         <div className="min-h-screen bg-slate-100">

//             {sidebarOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/40 z-30 lg:hidden"
//                     onClick={() => setSidebarOpen(false)}
//                 />
//             )}

//             <aside
//                 className={`
//                     fixed
//                     z-40
//                     top-0
//                     left-0
//                     h-screen
//                     w-64
//                     bg-[#041a4f]
//                     text-white
//                     transition-transform
//                     duration-300
//                     lg:translate-x-0
//                     ${sidebarOpen
//                         ? "translate-x-0"
//                         : "-translate-x-full"}
//                 `}
//             >

//                 <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">

//                     <div>
//                         <h1 className="font-bold text-xl">
//                             Church Admin
//                         </h1>

//                         <p className="text-xs text-white/50">
//                             Management Panel
//                         </p>
//                     </div>

//                     <button
//                         className="lg:hidden"
//                         onClick={() =>
//                             setSidebarOpen(false)
//                         }
//                     >
//                         <HiOutlineX size={25} />
//                     </button>

//                 </div>

//                 <nav className="p-4 space-y-2">

//                     <button
//                         onClick={() => {
//                             setActiveTab("dashboard")
//                             setSidebarOpen(false)
//                         }}
//                         className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === "dashboard"
//                             ? "bg-white text-[#041a4f]"
//                             : "hover:bg-white/10"
//                             }`}
//                     >
//                         <HiOutlineHome size={21} />
//                         Dashboard
//                     </button>

//                     <button
//                         onClick={() => {
//                             setActiveTab("pastoral")
//                             setSidebarOpen(false)
//                         }}
//                         className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === "pastoral"
//                             ? "bg-white text-[#041a4f]"
//                             : "hover:bg-white/10"
//                             }`}
//                     >
//                         <HiOutlineUsers size={21} />
//                         Pastoral Team
//                     </button>

//                     <button
//                         onClick={() => {
//                             setActiveTab("sermons")
//                             setSidebarOpen(false)
//                         }}
//                         className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === "sermons"
//                             ? "bg-white text-[#041a4f]"
//                             : "hover:bg-white/10"
//                             }`}
//                     >
//                         <HiOutlineCollection size={21} />
//                         Sermons
//                     </button>

//                 </nav>

//                 <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">

//                     <button
//                         onClick={logout}
//                         className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-300"
//                     >
//                         <HiOutlineLogout size={21} />
//                         Logout
//                     </button>

//                 </div>

//             </aside>

//             <main className="lg:ml-64">

//                 <header className="h-20 bg-white border-b flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-20">

//                     <button
//                         onClick={() =>
//                             setSidebarOpen(true)
//                         }
//                         className="lg:hidden text-gray-600"
//                     >
//                         <HiOutlineMenu size={26} />
//                     </button>

//                     <div className="hidden sm:block">

//                         <h2 className="font-bold text-xl text-[#041a4f]">
//                             {activeTab === "dashboard"
//                                 ? "Dashboard"
//                                 : activeTab === "pastoral"
//                                     ? "Pastoral Team"
//                                     : "Sermons"}
//                         </h2>

//                     </div>

//                     <div className="flex items-center gap-3 ml-auto">

//                         <div className="hidden sm:block text-right">

//                             <p className="font-semibold text-sm">
//                                 Admin
//                             </p>

//                             <p className="text-xs text-gray-500">
//                                 jajay@gmail.com
//                             </p>

//                         </div>

//                         <div className="w-10 h-10 bg-[#041a4f] text-white rounded-full flex items-center justify-center font-bold">
//                             A
//                         </div>

//                     </div>

//                 </header>

//                 <div className="p-4 sm:p-6 lg:p-8">

//                     {message && (
//                         <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
//                             {message}
//                         </div>
//                     )}

//                     {error && (
//                         <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
//                             {error}
//                         </div>
//                     )}

//                     {activeTab === "dashboard" && (

//                         <DashboardOverview
//                             pastoralCount={
//                                 pastoralTeam.length
//                             }
//                             sermonCount={
//                                 sermons.length
//                             }
//                             setActiveTab={
//                                 setActiveTab
//                             }
//                         />

//                     )}

//                     {activeTab === "pastoral" && (

//                         <section>

//                             <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">

//                                 <div>
//                                     <h2 className="text-2xl font-bold text-[#041a4f]">
//                                         Pastoral Team
//                                     </h2>

//                                     <p className="text-gray-500">
//                                         Manage your church pastoral team
//                                     </p>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         openAddModal("pastoral")
//                                     }
//                                     className="flex items-center justify-center gap-2 bg-[#041a4f] text-white px-5 py-3 rounded-lg hover:bg-[#092968]"
//                                 >
//                                     <HiOutlinePlus size={20} />
//                                     Add Member
//                                 </button>

//                             </div>

//                             <SearchBox
//                                 search={search}
//                                 setSearch={setSearch}
//                                 placeholder="Search pastoral members..."
//                             />

//                             <PastoralTable
//                                 data={filteredPastoral}
//                                 onEdit={(item) =>
//                                     openEditModal(
//                                         "pastoral",
//                                         item
//                                     )
//                                 }
//                                 onDelete={(id) =>
//                                     deleteItem(
//                                         "pastoral",
//                                         id
//                                     )
//                                 }
//                                 loading={loading}
//                             />

//                         </section>

//                     )}

//                     {activeTab === "sermons" && (

//                         <section>

//                             <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">

//                                 <div>
//                                     <h2 className="text-2xl font-bold text-[#041a4f]">
//                                         Sermons
//                                     </h2>

//                                     <p className="text-gray-500">
//                                         Manage church sermons
//                                     </p>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         openAddModal("sermon")
//                                     }
//                                     className="flex items-center justify-center gap-2 bg-[#041a4f] text-white px-5 py-3 rounded-lg hover:bg-[#092968]"
//                                 >
//                                     <HiOutlinePlus size={20} />
//                                     Add Sermon
//                                 </button>

//                             </div>

//                             <SearchBox
//                                 search={search}
//                                 setSearch={setSearch}
//                                 placeholder="Search sermons..."
//                             />

//                             <SermonTable
//                                 data={filteredSermons}
//                                 onEdit={(item) =>
//                                     openEditModal(
//                                         "sermon",
//                                         item
//                                     )
//                                 }
//                                 onDelete={(id) =>
//                                     deleteItem(
//                                         "sermon",
//                                         id
//                                     )
//                                 }
//                                 loading={loading}
//                             />

//                         </section>

//                     )}

//                 </div>

//             </main>

//             {showModal && (
//                 <FormModal
//                     type={modalType}
//                     editing={editingItem}
//                     formData={formData}
//                     handleChange={handleChange}
//                     saveItem={saveItem}
//                     closeModal={closeModal}
//                 />
//             )}

//         </div>
//     )
// }

// function DashboardOverview({
//     pastoralCount,
//     sermonCount,
//     setActiveTab
// }) {

//     return (
//         <section>

//             <div className="mb-8">

//                 <h1 className="text-3xl font-bold text-[#041a4f]">
//                     Welcome, Admin
//                 </h1>

//                 <p className="text-gray-500 mt-1">
//                     Manage your church website content from here.
//                 </p>

//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//                 <StatCard
//                     title="Pastoral Members"
//                     count={pastoralCount}
//                     icon={<HiOutlineUsers size={28} />}
//                 />

//                 <StatCard
//                     title="Sermons"
//                     count={sermonCount}
//                     icon={<HiOutlineCollection size={28} />}
//                 />

//                 <StatCard
//                     title="Total Content"
//                     count={
//                         pastoralCount +
//                         sermonCount
//                     }
//                     icon={<HiOutlineHome size={28} />}
//                 />

//             </div>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

//                 <div className="bg-white rounded-2xl p-6 shadow-sm border">

//                     <div className="flex items-center justify-between mb-5">

//                         <div>
//                             <h3 className="font-bold text-lg text-[#041a4f]">
//                                 Pastoral Team
//                             </h3>

//                             <p className="text-sm text-gray-500">
//                                 Manage team members
//                             </p>
//                         </div>

//                         <HiOutlineUsers
//                             size={30}
//                             className="text-[#041a4f]"
//                         />

//                     </div>

//                     <button
//                         onClick={() =>
//                             setActiveTab("pastoral")
//                         }
//                         className="w-full bg-slate-100 hover:bg-[#041a4f] hover:text-white py-3 rounded-lg font-medium transition"
//                     >
//                         Manage Pastoral Team
//                     </button>

//                 </div>

//                 <div className="bg-white rounded-2xl p-6 shadow-sm border">

//                     <div className="flex items-center justify-between mb-5">

//                         <div>
//                             <h3 className="font-bold text-lg text-[#041a4f]">
//                                 Sermons
//                             </h3>

//                             <p className="text-sm text-gray-500">
//                                 Manage sermons
//                             </p>
//                         </div>

//                         <HiOutlineCollection
//                             size={30}
//                             className="text-[#041a4f]"
//                         />

//                     </div>

//                     <button
//                         onClick={() =>
//                             setActiveTab("sermons")
//                         }
//                         className="w-full bg-slate-100 hover:bg-[#041a4f] hover:text-white py-3 rounded-lg font-medium transition"
//                     >
//                         Manage Sermons
//                     </button>

//                 </div>

//             </div>

//         </section>
//     )
// }

// function StatCard({
//     title,
//     count,
//     icon
// }) {

//     return (
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">

//             <div className="flex items-center justify-between">

//                 <div>

//                     <p className="text-gray-500 text-sm">
//                         {title}
//                     </p>

//                     <h2 className="text-3xl font-bold text-[#041a4f] mt-2">
//                         {count}
//                     </h2>

//                 </div>

//                 <div className="w-14 h-14 rounded-xl bg-slate-100 text-[#041a4f] flex items-center justify-center">
//                     {icon}
//                 </div>

//             </div>

//         </div>
//     )
// }

// function SearchBox({
//     search,
//     setSearch,
//     placeholder
// }) {

//     return (
//         <div className="bg-white rounded-xl border p-3 mb-6 flex items-center gap-3">

//             <HiOutlineSearch
//                 size={22}
//                 className="text-gray-400"
//             />

//             <input
//                 type="text"
//                 value={search}
//                 onChange={(e) =>
//                     setSearch(e.target.value)
//                 }
//                 placeholder={placeholder}
//                 className="w-full outline-none text-sm"
//             />

//         </div>
//     )
// }

// function PastoralTable({
//     data,
//     onEdit,
//     onDelete,
//     loading
// }) {

//     if (loading) {
//         return (
//             <Loading />
//         )
//     }

//     return (
//         <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

//             <div className="overflow-x-auto">

//                 <table className="w-full">

//                     <thead className="bg-slate-50">

//                         <tr>

//                             <th className="text-left px-6 py-4 text-sm font-semibold">
//                                 Member
//                             </th>

//                             <th className="text-left px-6 py-4 text-sm font-semibold">
//                                 Position
//                             </th>

//                             <th className="text-left px-6 py-4 text-sm font-semibold">
//                                 Description
//                             </th>

//                             <th className="text-right px-6 py-4 text-sm font-semibold">
//                                 Actions
//                             </th>

//                         </tr>

//                     </thead>

//                     <tbody>

//                         {data.length === 0 ? (

//                             <tr>

//                                 <td
//                                     colSpan="4"
//                                     className="text-center py-12 text-gray-500"
//                                 >
//                                     No pastoral members found
//                                 </td>

//                             </tr>

//                         ) : (

//                             data.map((item) => (

//                                 <tr
//                                     key={item._id}
//                                     className="border-t hover:bg-slate-50"
//                                 >

//                                     <td className="px-6 py-4">

//                                         <div className="flex items-center gap-3">

//                                             <img
//                                                 src={item.img}
//                                                 alt={item.name}
//                                                 className="w-12 h-12 rounded-full object-cover"
//                                             />

//                                             <span className="font-semibold">
//                                                 {item.name}
//                                             </span>

//                                         </div>

//                                     </td>

//                                     <td className="px-6 py-4">

//                                         <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//                                             {item.position}
//                                         </span>

//                                     </td>

//                                     <td className="px-6 py-4 text-sm text-gray-500 max-w-sm">
//                                         {item.desc}
//                                     </td>

//                                     <td className="px-6 py-4">

//                                         <div className="flex justify-end gap-2">

//                                             <button
//                                                 onClick={() =>
//                                                     onEdit(item)
//                                                 }
//                                                 className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
//                                             >
//                                                 <HiOutlinePencil size={18} />
//                                             </button>

//                                             <button
//                                                 onClick={() =>
//                                                     onDelete(
//                                                         item._id
//                                                     )
//                                                 }
//                                                 className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
//                                             >
//                                                 <HiOutlineTrash size={18} />
//                                             </button>

//                                         </div>

//                                     </td>

//                                 </tr>

//                             ))

//                         )}

//                     </tbody>

//                 </table>

//             </div>

//         </div>
//     )
// }

// function SermonTable({
//     data,
//     onEdit,
//     onDelete,
//     loading
// }) {

//     if (loading) {
//         return (
//             <Loading />
//         )
//     }

//     return (
//         <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

//             <div className="overflow-x-auto">

//                 <table className="w-full">

//                     <thead className="bg-slate-50">

//                         <tr>

//                             <th className="text-left px-6 py-4 text-sm font-semibold">
//                                 Sermon
//                             </th>

//                             <th className="text-left px-6 py-4 text-sm font-semibold">
//                                 Pastor
//                             </th>

//                             <th className="text-left px-6 py-4 text-sm font-semibold">
//                                 Subtitle
//                             </th>

//                             <th className="text-right px-6 py-4 text-sm font-semibold">
//                                 Actions
//                             </th>

//                         </tr>

//                     </thead>

//                     <tbody>

//                         {data.length === 0 ? (

//                             <tr>

//                                 <td
//                                     colSpan="4"
//                                     className="text-center py-12 text-gray-500"
//                                 >
//                                     No sermons found
//                                 </td>

//                             </tr>

//                         ) : (

//                             data.map((item) => (

//                                 <tr
//                                     key={item._id}
//                                     className="border-t hover:bg-slate-50"
//                                 >

//                                     <td className="px-6 py-4">

//                                         <div className="flex items-center gap-3">

//                                             <img
//                                                 src={item.img}
//                                                 alt={item.name}
//                                                 className="w-16 h-12 rounded-lg object-cover"
//                                             />

//                                             <span className="font-semibold">
//                                                 {item.name}
//                                             </span>

//                                         </div>

//                                     </td>

//                                     <td className="px-6 py-4 text-sm">
//                                         {item.pastor}
//                                     </td>

//                                     <td className="px-6 py-4 text-sm text-gray-500">
//                                         {item.sub}
//                                     </td>

//                                     <td className="px-6 py-4">

//                                         <div className="flex justify-end gap-2">

//                                             <button
//                                                 onClick={() =>
//                                                     onEdit(item)
//                                                 }
//                                                 className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
//                                             >
//                                                 <HiOutlinePencil size={18} />
//                                             </button>

//                                             <button
//                                                 onClick={() =>
//                                                     onDelete(
//                                                         item._id
//                                                     )
//                                                 }
//                                                 className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
//                                             >
//                                                 <HiOutlineTrash size={18} />
//                                             </button>

//                                         </div>

//                                     </td>

//                                 </tr>

//                             ))

//                         )}

//                     </tbody>

//                 </table>

//             </div>

//         </div>
//     )
// }

// function FormModal({
//     type,
//     editing,
//     formData,
//     handleChange,
//     saveItem,
//     closeModal
// }) {

//     const isPastoral = type === "pastoral"

//     return (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

//             <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

//                 <div className="sticky top-0 bg-white border-b px-6 py-5 flex items-center justify-between">

//                     <div>

//                         <h2 className="text-xl font-bold text-[#041a4f]">
//                             {editing
//                                 ? "Edit"
//                                 : "Add"}{" "}
//                             {isPastoral
//                                 ? "Pastoral Member"
//                                 : "Sermon"}
//                         </h2>

//                         <p className="text-sm text-gray-500">
//                             Fill in the information below
//                         </p>

//                     </div>

//                     <button
//                         onClick={closeModal}
//                         className="text-gray-400 hover:text-gray-700"
//                     >
//                         <HiOutlineX size={25} />
//                     </button>

//                 </div>

//                 <form
//                     onSubmit={saveItem}
//                     className="p-6 space-y-5"
//                 >

//                     <div>

//                         <label className="label">
//                             {isPastoral
//                                 ? "Name"
//                                 : "Sermon Name"}
//                         </label>

//                         <input
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder={
//                                 isPastoral
//                                     ? "Pastor name"
//                                     : "Sermon title"
//                             }
//                             className="input"
//                             required
//                         />

//                     </div>

//                     {isPastoral ? (

//                         <>

//                             <div>

//                                 <label className="label">
//                                     Position
//                                 </label>

//                                 <input
//                                     name="position"
//                                     value={formData.position}
//                                     onChange={handleChange}
//                                     placeholder="Senior Pastor"
//                                     className="input"
//                                     required
//                                 />

//                             </div>

//                             <div>

//                                 <label className="label">
//                                     Image
//                                 </label>

//                                 <input
//                                     type="file"
//                                     name="img"
//                                     onChange={handleChange}
//                                     accept="image/*"
//                                     // placeholder="https://..."
//                                     className="input"
//                                     required
//                                 />

//                             </div>

//                             <div>

//                                 <label className="label">
//                                     Description
//                                 </label>

//                                 <textarea
//                                     name="desc"
//                                     value={formData.desc}
//                                     onChange={handleChange}
//                                     placeholder="Pastor description..."
//                                     rows="5"
//                                     className="input resize-none"
//                                     required
//                                 />

//                             </div>

//                         </>

//                     ) : (

//                         <>

//                             <div>

//                                 <label className="label">
//                                     Subtitle
//                                 </label>

//                                 <input
//                                     name="sub"
//                                     value={formData.sub}
//                                     onChange={handleChange}
//                                     placeholder="Sunday Morning Service"
//                                     className="input"
//                                     required
//                                 />

//                             </div>

//                             <div>

//                                 <label className="label">
//                                     Pastor
//                                 </label>

//                                 <input
//                                     name="pastor"
//                                     value={formData.pastor}
//                                     onChange={handleChange}
//                                     placeholder="Pastor John"
//                                     className="input"
//                                     required
//                                 />

//                             </div>

//                             <div>

//                                 <label className="label">
//                                     Image URL
//                                 </label>

//                                 <input
//                                     name="img"
//                                     value={formData.img}
//                                     onChange={handleChange}
//                                     placeholder="https://..."
//                                     className="input"
//                                     required
//                                 />

//                             </div>

//                             <div>

//                                 <label className="label">
//                                     Button Text
//                                 </label>

//                                 <input
//                                     name="button"
//                                     value={formData.button}
//                                     onChange={handleChange}
//                                     placeholder="Watch Sermon"
//                                     className="input"
//                                 />

//                             </div>

//                         </>

//                     )}

//                     <div className="flex flex-col sm:flex-row gap-3 pt-3">

//                         <button
//                             type="button"
//                             onClick={closeModal}
//                             className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50"
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type="submit"
//                             className="w-full bg-[#041a4f] text-white py-3 rounded-lg font-semibold hover:bg-[#092968]"
//                         >
//                             {editing
//                                 ? "Update"
//                                 : "Create"}
//                         </button>

//                     </div>

//                 </form>

//             </div>

//         </div>
//     )
// }

// function Loading() {

//     return (
//         <div className="bg-white rounded-2xl border p-12 text-center">

//             <div className="w-10 h-10 border-4 border-gray-200 border-t-[#041a4f] rounded-full animate-spin mx-auto" />

//             <p className="mt-4 text-gray-500">
//                 Loading...
//             </p>

//         </div>
//     )
// }

// export default AdminDashboard




import React, { useEffect, useState } from "react"
import {
    HiOutlineHome,
    HiOutlineUsers,
    HiOutlineCollection,
    HiOutlineLogout,
    HiOutlineMenu,
    HiOutlineX,
    HiOutlinePlus,
    HiOutlinePencil,
    HiOutlineTrash,
    HiOutlineSearch
} from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import API from "../api/api"

function AdminDashboard() {

    const navigate = useNavigate()

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("dashboard")

    const [pastoralTeam, setPastoralTeam] = useState([])
    const [sermons, setSermons] = useState([])

    const [loading, setLoading] = useState(true)

    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState("")
    const [editingItem, setEditingItem] = useState(null)

    const [search, setSearch] = useState("")

    // ==============================
    // FORM DATA
    // ==============================

    const [formData, setFormData] = useState({
        name: "",
        position: "",
        img: null,
        desc: "",
        sub: "",
        pastor: "",
        button: "Watch Sermon"
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    // ==============================
    // CHECK ADMIN LOGIN
    // ==============================

    useEffect(() => {

        const token = localStorage.getItem("adminToken")

        if (!token) {
            navigate("/admin/login")
            return
        }

        fetchData()

    }, [])

    // ==============================
    // FETCH DATA
    // ==============================

    const fetchData = async () => {

        try {

            setLoading(true)

            const [
                pastoralResponse,
                sermonResponse
            ] = await Promise.all([
                API.get("/api/pastoral"),
                API.get("/api/sermons")
            ])

            setPastoralTeam(
                pastoralResponse.data.data || []
            )

            setSermons(
                sermonResponse.data.data || []
            )

        } catch (error) {

            if (error.response?.status === 401) {

                localStorage.removeItem("adminToken")

                navigate("/admin/login")

                return
            }

            setError(
                error.response?.data?.message ||
                "Failed to load dashboard"
            )

        } finally {

            setLoading(false)

        }
    }

    // ==============================
    // LOGOUT
    // ==============================

    const logout = () => {

        localStorage.removeItem("adminToken")

        navigate("/admin/login")

    }

    // ==============================
    // OPEN ADD MODAL
    // ==============================

    const openAddModal = (type) => {

        setModalType(type)

        setEditingItem(null)

        setFormData({
            name: "",
            position: "",
            img: null,
            desc: "",
            sub: "",
            pastor: "",
            button: "Watch Sermon"
        })

        setShowModal(true)

    }

    // ==============================
    // OPEN EDIT MODAL
    // ==============================

    const openEditModal = (type, item) => {

        setModalType(type)

        setEditingItem(item)

        setFormData({
            name: item.name || "",
            position: item.position || "",

            // Existing image URL is kept separately
            // through editingItem.img.
            // New image can be selected later.
            img: null,

            desc: item.desc || "",
            sub: item.sub || "",
            pastor: item.pastor || "",
            button: item.button || "Watch Sermon"
        })

        setShowModal(true)

    }

    // ==============================
    // CLOSE MODAL
    // ==============================

    const closeModal = () => {

        setShowModal(false)

        setEditingItem(null)

        setFormData({
            name: "",
            position: "",
            img: null,
            desc: "",
            sub: "",
            pastor: "",
            button: "Watch Sermon"
        })

    }

    // ==============================
    // HANDLE INPUT CHANGE
    // ==============================

    const handleChange = (e) => {

        const {
            name,
            value,
            files
        } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: files && files.length > 0
                ? files[0]
                : value
        }))

    }

    // ==============================
    // SAVE ITEM
    // ==============================

    const saveItem = async (e) => {

        e.preventDefault()

        setMessage("")
        setError("")

        try {

            // =====================================
            // PASTORAL
            // =====================================

            if (modalType === "pastoral") {

                const data = new FormData()

                data.append(
                    "name",
                    formData.name
                )

                data.append(
                    "position",
                    formData.position
                )

                data.append(
                    "desc",
                    formData.desc
                )

                // ---------------------------------
                // CREATE
                // ---------------------------------

                if (!editingItem) {

                    if (!(formData.img instanceof File)) {

                        setError(
                            "Please select an image"
                        )

                        return
                    }

                    data.append(
                        "img",
                        formData.img
                    )

                    await API.post(
                        "/api/pastoral",
                        data,
                        {
                            headers: {
                                "Content-Type":
                                    "multipart/form-data"
                            }
                        }
                    )

                    setMessage(
                        "Pastoral member added successfully"
                    )

                }

                // ---------------------------------
                // UPDATE
                // ---------------------------------

                else {

                    // Only send image if a new
                    // image was selected.
                    if (formData.img instanceof File) {

                        data.append(
                            "img",
                            formData.img
                        )

                    }

                    await API.put(
                        `/api/pastoral/${editingItem._id}`,
                        data,
                        {
                            headers: {
                                "Content-Type":
                                    "multipart/form-data"
                            }
                        }
                    )

                    setMessage(
                        "Pastoral member updated successfully"
                    )

                }

            }

            // =====================================
            // SERMON
            // =====================================

            else {

                const data = new FormData()

                data.append(
                    "name",
                    formData.name
                )

                data.append(
                    "sub",
                    formData.sub
                )

                data.append(
                    "pastor",
                    formData.pastor
                )

                data.append(
                    "button",
                    formData.button
                )

                // ---------------------------------
                // CREATE
                // ---------------------------------

                if (!editingItem) {

                    if (!(formData.img instanceof File)) {

                        setError(
                            "Please select an image"
                        )

                        return
                    }

                    data.append(
                        "img",
                        formData.img
                    )

                    await API.post(
                        "/api/sermons",
                        data,
                        {
                            headers: {
                                "Content-Type":
                                    "multipart/form-data"
                            }
                        }
                    )

                    setMessage(
                        "Sermon added successfully"
                    )

                }

                // ---------------------------------
                // UPDATE
                // ---------------------------------

                else {

                    // Only send image when a new
                    // image has been selected.
                    if (formData.img instanceof File) {

                        data.append(
                            "img",
                            formData.img
                        )

                    }

                    await API.put(
                        `/api/sermons/${editingItem._id}`,
                        data,
                        {
                            headers: {
                                "Content-Type":
                                    "multipart/form-data"
                            }
                        }
                    )

                    setMessage(
                        "Sermon updated successfully"
                    )

                }

            }

            closeModal()

            await fetchData()

        } catch (error) {

            console.error(error)

            setError(
                error.response?.data?.message ||
                "Operation failed"
            )

        }

    }

    // ==============================
    // DELETE
    // ==============================

    const deleteItem = async (type, id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this item?"
        )

        if (!confirmDelete) return

        try {

            if (type === "pastoral") {

                await API.delete(
                    `/api/pastoral/${id}`
                )

                setMessage(
                    "Pastoral member deleted"
                )

            } else {

                await API.delete(
                    `/api/sermons/${id}`
                )

                setMessage(
                    "Sermon deleted"
                )

            }

            await fetchData()

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Delete failed"
            )

        }

    }

    // ==============================
    // FILTER
    // ==============================

    const filteredPastoral = pastoralTeam.filter(
        (item) =>
            item.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            item.position
                ?.toLowerCase()
                .includes(search.toLowerCase())
    )

    const filteredSermons = sermons.filter(
        (item) =>
            item.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            item.pastor
                ?.toLowerCase()
                .includes(search.toLowerCase())
    )

    // ==============================
    // UI
    // ==============================

    return (
        <div className="min-h-screen bg-slate-100">

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                />
            )}

            <aside
                className={`
                    fixed
                    z-40
                    top-0
                    left-0
                    h-screen
                    w-64
                    bg-[#041a4f]
                    text-white
                    transition-transform
                    duration-300
                    lg:translate-x-0
                    ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"}
                `}
            >

                <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">

                    <div>

                        <h1 className="font-bold text-xl">
                            Church Admin
                        </h1>

                        <p className="text-xs text-white/50">
                            Management Panel
                        </p>

                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >
                        <HiOutlineX size={25} />
                    </button>

                </div>

                <nav className="p-4 space-y-2">

                    <button
                        onClick={() => {
                            setActiveTab("dashboard")
                            setSidebarOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === "dashboard"
                            ? "bg-white text-[#041a4f]"
                            : "hover:bg-white/10"
                            }`}
                    >
                        <HiOutlineHome size={21} />
                        Dashboard
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab("pastoral")
                            setSidebarOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === "pastoral"
                            ? "bg-white text-[#041a4f]"
                            : "hover:bg-white/10"
                            }`}
                    >
                        <HiOutlineUsers size={21} />
                        Pastoral Team
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab("sermons")
                            setSidebarOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === "sermons"
                            ? "bg-white text-[#041a4f]"
                            : "hover:bg-white/10"
                            }`}
                    >
                        <HiOutlineCollection size={21} />
                        Sermons
                    </button>

                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">

                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-300"
                    >
                        <HiOutlineLogout size={21} />
                        Logout
                    </button>

                </div>

            </aside>

            <main className="lg:ml-64">

                <header className="h-20 bg-white border-b flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-20">

                    <button
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                        className="lg:hidden text-gray-600"
                    >
                        <HiOutlineMenu size={26} />
                    </button>

                    <div className="hidden sm:block">

                        <h2 className="font-bold text-xl text-[#041a4f]">

                            {activeTab === "dashboard"
                                ? "Dashboard"
                                : activeTab === "pastoral"
                                    ? "Pastoral Team"
                                    : "Sermons"}

                        </h2>

                    </div>

                    <div className="flex items-center gap-3 ml-auto">

                        <div className="hidden sm:block text-right">

                            <p className="font-semibold text-sm">
                                Admin
                            </p>

                            <p className="text-xs text-gray-500">
                                jajay@gmail.com
                            </p>

                        </div>

                        <div className="w-10 h-10 bg-[#041a4f] text-white rounded-full flex items-center justify-center font-bold">
                            A
                        </div>

                    </div>

                </header>

                <div className="p-4 sm:p-6 lg:p-8">

                    {message && (
                        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                            {message}
                        </div>
                    )}

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    {activeTab === "dashboard" && (

                        <DashboardOverview
                            pastoralCount={
                                pastoralTeam.length
                            }
                            sermonCount={
                                sermons.length
                            }
                            setActiveTab={
                                setActiveTab
                            }
                        />

                    )}

                    {activeTab === "pastoral" && (

                        <section>

                            <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">

                                <div>

                                    <h2 className="text-2xl font-bold text-[#041a4f]">
                                        Our Leaders
                                    </h2>

                                    <p className="text-gray-500">
                                        Manage your church Leaders
                                    </p>

                                </div>

                                <button
                                    onClick={() =>
                                        openAddModal("pastoral")
                                    }
                                    className="flex items-center justify-center gap-2 bg-[#041a4f] text-white px-5 py-3 rounded-lg hover:bg-[#092968]"
                                >
                                    <HiOutlinePlus size={20} />
                                    Add Member
                                </button>

                            </div>

                            <SearchBox
                                search={search}
                                setSearch={setSearch}
                                placeholder="Search a leader..."
                            />

                            <PastoralTable
                                data={filteredPastoral}
                                onEdit={(item) =>
                                    openEditModal(
                                        "pastoral",
                                        item
                                    )
                                }
                                onDelete={(id) =>
                                    deleteItem(
                                        "pastoral",
                                        id
                                    )
                                }
                                loading={loading}
                            />

                        </section>

                    )}

                    {activeTab === "sermons" && (

                        <section>

                            <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">

                                <div>

                                    <h2 className="text-2xl font-bold text-[#041a4f]">
                                        Sermons
                                    </h2>

                                    <p className="text-gray-500">
                                        Manage church sermons
                                    </p>

                                </div>

                                <button
                                    onClick={() =>
                                        openAddModal("sermon")
                                    }
                                    className="flex items-center justify-center gap-2 bg-[#041a4f] text-white px-5 py-3 rounded-lg hover:bg-[#092968]"
                                >
                                    <HiOutlinePlus size={20} />
                                    Add Sermon
                                </button>

                            </div>

                            <SearchBox
                                search={search}
                                setSearch={setSearch}
                                placeholder="Search sermons..."
                            />

                            <SermonTable
                                data={filteredSermons}
                                onEdit={(item) =>
                                    openEditModal(
                                        "sermon",
                                        item
                                    )
                                }
                                onDelete={(id) =>
                                    deleteItem(
                                        "sermon",
                                        id
                                    )
                                }
                                loading={loading}
                            />

                        </section>

                    )}

                </div>

            </main>

            {showModal && (

                <FormModal
                    type={modalType}
                    editing={editingItem}
                    formData={formData}
                    handleChange={handleChange}
                    saveItem={saveItem}
                    closeModal={closeModal}
                />

            )}

        </div>
    )
}


// ======================================================
// DASHBOARD OVERVIEW
// ======================================================

function DashboardOverview({
    pastoralCount,
    sermonCount,
    setActiveTab
}) {

    return (
        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-[#041a4f]">
                    Welcome, Admin
                </h1>

                <p className="text-gray-500 mt-1">
                    Manage your church website content from here.
                </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <StatCard
                    title="Pastoral Members"
                    count={pastoralCount}
                    icon={
                        <HiOutlineUsers size={28} />
                    }
                />

                <StatCard
                    title="Sermons"
                    count={sermonCount}
                    icon={
                        <HiOutlineCollection size={28} />
                    }
                />

                <StatCard
                    title="Total Content"
                    count={
                        pastoralCount +
                        sermonCount
                    }
                    icon={
                        <HiOutlineHome size={28} />
                    }
                />

            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white rounded-2xl p-6 shadow-sm border">

                    <div className="flex items-center justify-between mb-5">

                        <div>

                            <h3 className="font-bold text-lg text-[#041a4f]">
                                Pastoral Team
                            </h3>

                            <p className="text-sm text-gray-500">
                                Manage team members
                            </p>

                        </div>

                        <HiOutlineUsers
                            size={30}
                            className="text-[#041a4f]"
                        />

                    </div>

                    <button
                        onClick={() =>
                            setActiveTab("pastoral")
                        }
                        className="w-full bg-slate-100 hover:bg-[#041a4f] hover:text-white py-3 rounded-lg font-medium transition"
                    >
                        Manage Pastoral Team
                    </button>

                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border">

                    <div className="flex items-center justify-between mb-5">

                        <div>

                            <h3 className="font-bold text-lg text-[#041a4f]">
                                Sermons
                            </h3>

                            <p className="text-sm text-gray-500">
                                Manage sermons
                            </p>

                        </div>

                        <HiOutlineCollection
                            size={30}
                            className="text-[#041a4f]"
                        />

                    </div>

                    <button
                        onClick={() =>
                            setActiveTab("sermons")
                        }
                        className="w-full bg-slate-100 hover:bg-[#041a4f] hover:text-white py-3 rounded-lg font-medium transition"
                    >
                        Manage Sermons
                    </button>

                </div>

            </div>

        </section>
    )
}


// ======================================================
// STAT CARD
// ======================================================

function StatCard({
    title,
    count,
    icon
}) {

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-500 text-sm">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold text-[#041a4f] mt-2">
                        {count}
                    </h2>

                </div>

                <div className="w-14 h-14 rounded-xl bg-slate-100 text-[#041a4f] flex items-center justify-center">
                    {icon}
                </div>

            </div>

        </div>
    )
}


// ======================================================
// SEARCH BOX
// ======================================================

function SearchBox({
    search,
    setSearch,
    placeholder
}) {

    return (
        <div className="bg-white rounded-xl border p-3 mb-6 flex items-center gap-3">

            <HiOutlineSearch
                size={22}
                className="text-gray-400"
            />

            <input
                type="text"
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                placeholder={placeholder}
                className="w-full outline-none text-sm"
            />

        </div>
    )
}


// ======================================================
// PASTORAL TABLE
// ======================================================

function PastoralTable({
    data,
    onEdit,
    onDelete,
    loading
}) {

    if (loading) {
        return <Loading />
    }

    return (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="text-left px-6 py-4 text-sm font-semibold">
                                Member
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold">
                                Position
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold">
                                Description
                            </th>

                            <th className="text-right px-6 py-4 text-sm font-semibold">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center py-12 text-gray-500"
                                >
                                    No leaders found
                                </td>

                            </tr>

                        ) : (

                            data.map((item) => (

                                <tr
                                    key={item._id}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-3">

                                            <img
                                                // src={item.img}
                                                // alt={item.name}

                                                src={`${API.defaults.baseURL}${item.img}`}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />

                                            <span className="font-semibold">
                                                {item.name}
                                            </span>

                                        </div>

                                    </td>

                                    <td className="px-6 py-4">

                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                            {item.position}
                                        </span>

                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-sm">
                                        {item.desc}
                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-end gap-2">

                                            <button
                                                onClick={() =>
                                                    onEdit(item)
                                                }
                                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                                            >
                                                <HiOutlinePencil size={18} />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    onDelete(item._id)
                                                }
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                                            >
                                                <HiOutlineTrash size={18} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    )
}


// ======================================================
// SERMON TABLE
// ======================================================

function SermonTable({
    data,
    onEdit,
    onDelete,
    loading
}) {

    if (loading) {
        return <Loading />
    }

    return (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="text-left px-6 py-4 text-sm font-semibold">
                                Sermon
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold">
                                Pastor
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold">
                                Subtitle
                            </th>

                            <th className="text-right px-6 py-4 text-sm font-semibold">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center py-12 text-gray-500"
                                >
                                    No sermons found
                                </td>

                            </tr>

                        ) : (

                            data.map((item) => (

                                <tr
                                    key={item._id}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-3">

                                            {/* <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-16 h-12 rounded-lg object-cover"
                                            /> */}

                                            <img
                                                src={`${API.defaults.baseURL}${item.img}`}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                                onError={(e) => {
                                                    console.log("IMAGE URL:", e.currentTarget.src);
                                                }}
                                            />

                                            <span className="font-semibold">
                                                {item.name}
                                            </span>

                                        </div>

                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        {item.pastor}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {item.sub}
                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-end gap-2">

                                            <button
                                                onClick={() =>
                                                    onEdit(item)
                                                }
                                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                                            >
                                                <HiOutlinePencil size={18} />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    onDelete(item._id)
                                                }
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                                            >
                                                <HiOutlineTrash size={18} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    )
}


// ======================================================
// FORM MODAL
// ======================================================

function FormModal({
    type,
    editing,
    formData,
    handleChange,
    saveItem,
    closeModal
}) {

    const isPastoral = type === "pastoral"

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

                <div className="sticky top-0 bg-white border-b px-6 py-5 flex items-center justify-between">

                    <div>

                        <h2 className="text-xl font-bold text-[#041a4f]">

                            {editing
                                ? "Edit"
                                : "Add"}{" "}

                            {isPastoral
                                ? "Pastoral Member"
                                : "Sermon"}

                        </h2>

                        <p className="text-sm text-gray-500">
                            Fill in the information below
                        </p>

                    </div>

                    <button
                        onClick={closeModal}
                        className="text-gray-400 hover:text-gray-700"
                    >
                        <HiOutlineX size={25} />
                    </button>

                </div>

                <form
                    onSubmit={saveItem}
                    className="p-6 space-y-5"
                >

                    {/* ==========================
                        NAME
                    =========================== */}

                    <div>

                        <label className="label">

                            {isPastoral
                                ? "Name"
                                : "Sermon Name"}

                        </label>

                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={
                                isPastoral
                                    ? "Pastor name"
                                    : "Sermon title"
                            }
                            className="input"
                            required
                        />

                    </div>


                    {/* ==========================
                        PASTORAL
                    =========================== */}

                    {isPastoral ? (

                        <>

                            <div>

                                <label className="label">
                                    Position
                                </label>

                                <input
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    placeholder="Senior Pastor"
                                    className="input"
                                    required
                                />

                            </div>


                            {/* IMAGE FILE */}

                            <div>

                                <label className="label">
                                    Image
                                </label>

                                <input
                                    type="file"
                                    name="img"
                                    onChange={handleChange}
                                    accept="image/*"
                                    className="input"
                                    required={!editing}
                                />

                                {editing && (
                                    <p className="text-xs text-gray-500 mt-2">
                                        Leave empty to keep the current image.
                                    </p>
                                )}

                                {formData.img instanceof File && (
                                    <p className="text-sm text-green-600 mt-2">
                                        Selected: {formData.img.name}
                                    </p>
                                )}

                            </div>


                            <div>

                                <label className="label">
                                    Description
                                </label>

                                <textarea
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    placeholder="Pastor description..."
                                    rows="5"
                                    className="input resize-none"
                                    required
                                />

                            </div>

                        </>

                    ) : (

                        /* ==========================
                           SERMON
                        =========================== */

                        <>

                            <div>

                                <label className="label">
                                    Subtitle
                                </label>

                                <input
                                    name="sub"
                                    value={formData.sub}
                                    onChange={handleChange}
                                    placeholder="Sunday Morning Service"
                                    className="input"
                                    required
                                />

                            </div>


                            <div>

                                <label className="label">
                                    Pastor
                                </label>

                                <input
                                    name="pastor"
                                    value={formData.pastor}
                                    onChange={handleChange}
                                    placeholder="Pastor John"
                                    className="input"
                                    required
                                />

                            </div>


                            {/* IMAGE FILE */}

                            <div>

                                <label className="label">
                                    Image
                                </label>

                                <input
                                    type="file"
                                    name="img"
                                    onChange={handleChange}
                                    accept="image/*"
                                    className="input"
                                    required={!editing}
                                />

                                {editing && (
                                    <p className="text-xs text-gray-500 mt-2">
                                        Leave empty to keep the current image.
                                    </p>
                                )}

                                {formData.img instanceof File && (
                                    <p className="text-sm text-green-600 mt-2">
                                        Selected: {formData.img.name}
                                    </p>
                                )}

                            </div>


                            <div>

                                <label className="label">
                                    Button Text
                                </label>

                                <input
                                    name="button"
                                    value={formData.button}
                                    onChange={handleChange}
                                    placeholder="Watch Sermon"
                                    className="input"
                                />

                            </div>

                        </>

                    )}


                    {/* ==========================
                        BUTTONS
                    =========================== */}

                    <div className="flex flex-col sm:flex-row gap-3 pt-3">

                        <button
                            type="button"
                            onClick={closeModal}
                            className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-full bg-[#041a4f] text-white py-3 rounded-lg font-semibold hover:bg-[#092968]"
                        >
                            {editing
                                ? "Update"
                                : "Create"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}



function Loading() {

    return (
        <div className="bg-white rounded-2xl border p-12 text-center">

            <div className="w-10 h-10 border-4 border-gray-200 border-t-[#041a4f] rounded-full animate-spin mx-auto" />

            <p className="mt-4 text-gray-500">
                Loading...
            </p>

        </div>
    )
}

export default AdminDashboard
