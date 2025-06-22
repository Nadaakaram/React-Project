// import React from "react";
// // import FilterOption from "./FilterOption";
// import { Card, Button } from "react-bootstrap";
// import FilterOption from "./FilterOption";

// export default function FilterSection({ title, options, selected, onChange }) {
//   const handleToggle = (option) => {
//     if (selected.includes(option)) {
//       onChange(selected.filter((item) => item !== option));
//     } else {
//       onChange([...selected, option]);
//     }
//   };
//   return (
//     <Card className="bg-dark text-white mb-4">
//       <Card.Body>
//         <div className="d-flex justify-content-between align-items-center mb-2">
//           <h6 className="mb-0">{title}</h6>
//         </div>
//         <div className="d-flex flex-column gap-2">
//           {options.map((option, index) => (
//             <FilterOption
//               key={index}
//               label={option}
//               checked={selected?.includes(option)}
//               onChange={() => handleToggle(option)}
//             />
//           ))}
//         </div>
//         {/* <div className="text-end ">
//           <Button variant="link" className="text-light">
//             See more
//           </Button>
//         </div> */}
//       </Card.Body>
//     </Card>
//   );
// }

//////////////////Ahmed////////////////////
import React from "react";
// import FilterOption from "./FilterOption";
import { Card, Button } from "react-bootstrap";
import FilterOption from "./FilterOption";

export default function FilterSection({ title, options, selected, onChange }) {
  const handleToggle = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };
  return (
    <Card className="bg-dark text-white mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="mb-0">{title}</h6>
        </div>
        <div className="d-flex flex-column gap-2">
          {options.map((option, index) => (
            <FilterOption
              key={index}
              label={option}
              checked={selected?.includes(option)}
              onChange={() => handleToggle(option)}
            />
          ))}
        </div>
        {/* <div className="text-end ">
          <Button variant="link" className="text-light">
            See more
          </Button>
        </div> */}
      </Card.Body>
    </Card>
  );
}
