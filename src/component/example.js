// import React, { useEffect, useState } from "react";

// export default function Example() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [category, setCategory] = useState([]);
//   const [filtering, setFilter] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const result = await res.json();
//         setData(result);
//         const unique = [...new Set(result.map((cat) => cat.category))];
//         setCategory(unique);
//       } catch (err) {
//         setError(err.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const filterData = filtering
//     ? data.filter((v) => v.category == filtering)
//     : data;

//   return (
//     <>
//       <div>
//         {category.map((i) => (
//           <div
//             key={i}
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               marginBottom: "10px",
//             }}
//           >
//             <button
//               onClick={() => {
//                 setFilter(i);
//               }}
//             >
//               {i}
//             </button>
//           </div>
//         ))}
//       </div>

//       <div>
//         {filterData.map((item, ind) => (
//           <li>{item.title}</li>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

const Example = () => {
  const [thumbnail, setThumbnail] = useState([]);
  const [album, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const result = await res.json();
        setThumbnail(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const uniqueAlbum = [...new Set(thumbnail.map((album) => album.albumId))];

  const handleAlbums = (id) => {
    const filtered = thumbnail.filter((uri) => uri.albumId === id);
    setAlbums(filtered);
  };

  return (
    <div>
    {/* Display unique album buttons */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px" }}>

    {uniqueAlbum.map((unq) => (
      <button
      key={unq} // Add a unique key for each button
      onClick={() => handleAlbums(unq)}
      >
        Album {unq}
      </button>
    ))}
    </div>
    {/* Display thumbnails of selected album */}
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {album?.map((uri) => (
        <img
          key={uri.id}
          src={uri.thumbnailUrl}
          alt={uri.title}
          style={{ margin: '10px' }} 
        />
      ))}
    </div>
  </div>
    
  );
};

export default Example;
