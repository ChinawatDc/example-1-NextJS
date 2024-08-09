'use client'
import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import moment from "moment";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [show, setShow] = useState(false);

  // Function to get the current time
  function getCurrentTime() {
    return moment();
  }

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Get the day of the week and format the time
  const dayOfWeek = currentTime.format('dddd');
  const timeString = currentTime.format('HH:mm:ss');

  let greeting = '';
  const urlLogo = `/A-Star-Logo.png`;
  if (dayOfWeek === 'Monday') {
    greeting = 'สวัสดี วันจันทร์';
  } else if (dayOfWeek === 'Tuesday') {
    greeting = 'สวัสดี วันอังคาร';
  } else if (dayOfWeek === 'Wednesday') {
    greeting = 'สวัสดี วันพุธ';
  } else if (dayOfWeek === 'Thursday') {
    greeting = 'สวัสดี วันพฤหัสบดี';
  } else if (dayOfWeek === 'Friday') {
    greeting = 'สวัสดี วันศุกร์';
  } else if (dayOfWeek === 'Saturday') {
    greeting = 'สวัสดี วันเสาร์';
  } else if (dayOfWeek === 'Sunday') {
    greeting = 'สวัสดี วันอาทิตย์';
  }

  return (
    <>
      <div className='ml-5 mr-auto'>
        <div className='pt-6 md:container md:mx-auto'>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <div className="flex justify-center mb-4">
                  <img
                    width={200}
                    height={200}
                    alt={'LOGO'}
                    className="object-contain"
                    src={urlLogo}
                  />
                </div>

                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: getDayColor(dayOfWeek) }}
                  sx={{
                    fontSize: {
                      xs: '1.75rem',
                      md: 'inherit',
                    },
                  }}
                >
                  {greeting}
                </Typography>

                <Typography
                  variant="h4"
                  paragraph
                  style={{ color: getDayColor(dayOfWeek) }}
                  sx={{
                    fontSize: {
                      xs: '1.75rem',
                      md: 'inherit',
                    },
                  }}
                >
                  {timeString} {/* Updated time format */}
                </Typography>

              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

function getDayColor(dayOfWeek: string) {
  switch (dayOfWeek) {
    case 'Monday':
      return 'yellow';
    case 'Tuesday':
      return 'pink';
    case 'Wednesday':
      return 'green';
    case 'Thursday':
      return 'orange';
    case 'Friday':
      return 'blue';
    case 'Saturday':
      return 'purple';
    case 'Sunday':
      return 'red';
    default:
      return 'black';
  }
}
