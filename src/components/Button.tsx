import "../styles/Button.css"

interface ButtonGroupProps {
  unavailable?: string[];
}

function ButtonGroup({ unavailable = [] }: ButtonGroupProps) {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="btn-group" role="group" aria-label="Size button group">
      {sizes.map(size => {
        const isAvailable = !unavailable.includes(size);
        return (
            <button
            key={size}
            type="button"
            className={`btn btn-outline-primary ${!isAvailable ? "crossed-out" : ""}`}
            disabled={!isAvailable}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup