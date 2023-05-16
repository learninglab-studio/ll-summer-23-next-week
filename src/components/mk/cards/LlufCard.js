"use client"

import { useEffect, useState } from 'react';
import styles from './LlufCard.module.css'

const LlufCard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/airtable/Workers/slug/${props.personSlug}`)
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        <pre>{data ? JSON.stringify(data, null, 4) : "waiting"}</pre>
      {/* Render the data */}
    </div>
  );
};

export default LlufCard;


