"use client";
import React, { useEffect, useState } from "react";
import { BsCameraReels } from "react-icons/bs";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import Image from "next/image";

function parseTimeString(timeString) {
  if (!timeString || typeof timeString !== "string") return [];
  return timeString.split(",").map((time) => time.trim());
}

function MoviesApp() {
  const [movie, setMovie] = useState([]);
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchStrapiData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/movies?populate=*"
        );
        const data = await response.json();

        // แปลงข้อมูล movie_time เป็น array สำหรับแต่ละรายการ
        const moviesWithParsedTimes = data.data.map((movie) => ({
          ...movie,
          parsedTimes: parseTimeString(movie.movie_time),
        }));
        setMovie(moviesWithParsedTimes);
        console.log(moviesWithParsedTimes);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    const fetchThemeColor = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/theme");
        const data = await response.json();
        // console.log(data.data.first_color)
        setFirstColor(data.data.first_color);
        setSecondColor(data.data.second_color);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStrapiData();
    fetchThemeColor();
  }, []);
  return (
    <Container>
      <Navbar />
      {/* <div className="flex flex-col items-center justify-center min-h-screen "> */}
      <div className="flex-grow p-5 flex flex-col items-center bg-gray-900">
        <div className="grid items-start">
          <h2 className="text-3xl mb-5 text-center text-white">MVP Buriram</h2>
          <div className="grid grid-cols-2 ">
            <p
              className={`rounded-3xl py-2 text-white text-center m-2 shadow-xl px-10`}
              style={{
                backgroundImage: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
              }}
            >
              Today
            </p>
            <p className="bg-gradient-to-r bg-violet-700 to-pink-300 rounded-3xl py-2 text-white text-center m-2 shadow-xl px-10">
              วันพรุ่งนี้
            </p>
          
          </div>
        </div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          movie.map((val, index) => (
            <div key={index} className="grid my-4">
              <div className=" grid grid-cols-3  bg-white p-3 rounded-xl w-[800px]">
                <div className="col-span-1">
                  <img
                    src={`http://localhost:1337${val.movie_img?.url}`}
                    alt={val.movie_name}
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div className="col-span-2 px-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {val.movie_name}
                    </h3>
                    <div className="flex space-x-2 items-center mb-2">
                      <div className="bg-amber-500 rounded-full  text-xs p-2">
                        <BsCameraReels className="text-xl" />
                      </div>
                      <p>{val.Sound}</p>
                    </div>
                    <div className="grid grid-cols-4">
                      {val.parsedTimes?.length > 0 ? (
                        val.parsedTimes.map((time, index) => (
                          <p
                            key={index}
                            className="rounded-3xl py-2 text-white text-center m-2 shadow-xl"
                            style={{
                              backgroundImage: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
                            }}
                          >
                            {time}
                          </p>
                        ))
                      ) : (
                        <li>No Times Available</li>
                      )}
                    </div>
                  </div>
                  <div className="text-right font-light">{val.movie_rate}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* </div> */}
      <Footer />
    </Container>
  );
}

export default MoviesApp;
