<template>
  <div>
    <svg
      width="481"
      height="501"
      viewBox="0 0 481 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M253.963 9.149a63960.346 63960.346 0 0 1 218.128 284.978c9.055 11.685 7.683 19.659-3.978 28.732a26868.348 26868.348 0 0 0-213.19 168.54 20.576 20.576 0 0 1-6.858 4.879 20.536 20.536 0 0 1-16.465 0 20.576 20.576 0 0 1-6.858-4.879A31628.916 31628.916 0 0 0 14.707 324.921c-13.719-10.998-15.64-19.659-4.39-34.093A31716.153 31716.153 0 0 0 224.193 11.623a18.807 18.807 0 0 1 6.133-5.978 18.762 18.762 0 0 1 23.637 3.504Z"
        stroke="url(#aca)"
        stroke-width="4.637"
        stroke-miterlimit="10"
      />
      <path
        d="M240.656 3v492.522"
        stroke="url(#aba)"
        stroke-width="4.637"
        stroke-miterlimit="10"
      />
      <defs>
        <linearGradient
          id="aca"
          x1="381.547"
          y1="131.773"
          x2="98.219"
          y2="414.517"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#66286B" />
          <stop offset="1" stop-color="#E62F72" />
        </linearGradient>
        <linearGradient id="aba" gradientUnits="userSpaceOnUse">
          <stop stop-color="#66286B" />
          <stop offset="1" stop-color="#E62F72" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  mounted() {
    let inverse = 1;
    const aca = document.querySelector("#aca");

    console.log(aca.getAttribute("x1"), aca.getAttribute("y1"));

    // setInterval(() => {
    //   let x1 = aca.getAttribute("x1");

    //   if (x1 >= 481) inverse = -1;
    //   if (x1 <= 0) inverse = 1;

    //   x1 = parseFloat(x1) + inverse * 2;

    //   aca.setAttribute("x1", x1);

    // }, 50);
  },
};
</script>
