import axios from "axios";
import { memo, useEffect, useState, type FormEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const BASE_URL = "https://689c553f58a27b18087dc144.mockapi.io/";

const Home = () => {
  const [data, setData] = useState<any>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [addres, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [reload, setReload] = useState(true);
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/students`).then((res) => setData(res.data));
  }, [reload]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = { name, date, addres, email };
    if (editingItem) {
      axios.put(`${BASE_URL}/students/${editingItem.id}`, msg).then(() => {
        setReload((p) => !p);
        setEditingItem(null);
        setName("");
        setDate("");
        setAdress("");
        setEmail("");
      });
    } else {
      axios.post(`${BASE_URL}/students`, msg).then(() => {
        setReload((p) => !p);
        setName("");
        setDate("");
        setAdress("");
        setEmail("");
      });
    }
  };

  const handleDelete = (id: string) => {
    axios.delete(`${BASE_URL}/students/${id}`).then(() => {
      setReload((p) => !p);
    });
  };

  const handleUpdate = (item: any) => {
    setName(item.name);
    setEmail(item.email);
    setDate(item.date);
    setAdress(item.addres);
    setEditingItem(item);
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl text-center">Students</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 w-[300px] mx-auto">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
            className="border border-gray-400 p-2 rounded-[10px]"
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="bithdate"
            className="border border-gray-400 p-2 rounded-[10px]"
          />
          <input
            value={addres}
            onChange={(e) => setAdress(e.target.value)}
            type="text"
            placeholder="address"
            className="border border-gray-400 p-2 rounded-[10px]"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            className="border border-gray-400 p-2 rounded-[10px]"
          />
          <button className="h-[40px] rounded-[10px] bg-blue-500">
            Submit
          </button>
        </div>
      </form>
      <div className="mt-10 grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.map((item: any, inx: number) => (
          <div
            key={item.id ?? inx}
            className=" rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.name || "Image"}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h1 className="font-bold text-lg mb-1">
              Name: <span className="font-normal">{item.name}</span>
            </h1>

            <p className="mb-1">
              <strong>Date: </strong>
              {item.date}
            </p>
            <p className="mb-1">
              <strong>Address: </strong>
              {item.addres}
            </p>
            <p className="mb-4">
              <strong>Email: </strong>
              {item.email}
            </p>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => handleUpdate(item)}
                className="flex-1 flex items-center justify-center gap-2 border border-gray-400 rounded py-2 hover:bg-blue-50 transition-colors"
              >
                Edit <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="flex-1 flex items-center justify-center gap-2 border border-gray-400 rounded py-2 hover:bg-red-50 transition-colors"
              >
                Delete <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Home);
