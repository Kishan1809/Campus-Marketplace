import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ addProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ simple validation
        if (!name || !price || !category) {
            alert("Please fill all fields");
            return;
        }

        addProduct({
            id: Date.now(),
            name,
            price,
            category
        });

        navigate("/");
    };


    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />

                <input
                    className="input"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /><br /><br />

                <input
                    className="input"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                /><br /><br />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
