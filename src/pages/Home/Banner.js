import React from "react";
const Banner = () => {
    return (
        <div class="container bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className="" src="https://s3-alpha-sig.figma.com/img/aad3/7bdf/81d3bac886d50f470fcaa991fa4cc196?Expires=1655683200&Signature=CimVirxAHRRfkIc-qr39bxhqtUTWVgI7miC9YeyVZgd-K2Ki~1v~hXlEhNJZCzlKq5Vooe32yBC~LRV9DTPFYRTt2ixqU~hMxDiXrMTakZl9s7H01plRpSbWcFJimKPNYHY40GB51bq0CgxjD2Y5GKVZpCTSNVHPqt3I9DixieFAfI25BaP496RVZTAj~LSJZSNg4gU9qg~soSO268v6RuDK4gh5zd2hHzNnKdwt-dqW1UvUTSK-8vyvFdYCSh4bNp1E8HTCcW0ByijmaGFtnjTFvpChuZ1OMfKNa8Z-bnv4-tqU-h7cmiS0DobxZMeCZ7boa8voikEYLh3eOxCNeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="max-w-sm rounded-lg shadow-2xl" />
                <div className="">
                    <h1 class="text-5xl font-bold">I’m Abu Bakar Front-end Developer </h1>
                    <p class="py-6">Hi! My name is Muhammad Abu Bakar.I am Frontend Developer, and I'm very passionate and dedicated to my work.With 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <button class="btn rounded-none bg-[#FFB400] px-8 py-4 text-black border-0 hover:bg-[#FFB400]">Hire Me <img src="https://i.ibb.co/829F2Wd/arrow-right.png" className="ml-2.5" /></button>
                </div>
            </div>
        </div>
    )
}
export default Banner;
