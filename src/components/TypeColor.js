export const TypeColor = (type) => {
  console.log("init",type);
  if (type === "fire") {
    console.log(type);
    return "bg-red-600 hover:bg-red-900";
  } else if (type === "grass") {
    console.log(type);
    return "bg-green-500 hover:bg-green-900";
  } else if (type === "water") {
    console.log(type);
    return "bg-blue-600 hover:bg-blue-900";
  } else if (type === "bug") {
    console.log(type);
    return "bg-lime-500 hover:bg-lime-900";
  } else {
    console.log(type);
    return "bg-zinc-700 hover:bg-zinc-900";
  }
}
