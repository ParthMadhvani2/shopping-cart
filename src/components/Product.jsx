const Product = () => {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src= `${post.image}` />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {
          selected ? <p>Removed Item</p>
        }
      </button>
    </div>
  );
};

export default Product;
