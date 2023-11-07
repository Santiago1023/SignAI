import Layoutp from "@/layouts/Layout";
import { labelsData } from "@/components/chart/chart.services";
import { useState, useEffect } from "react";
import ChartData from "@/components/chart/ChartData";
import styles from "@/styles/data-analysis.module.css";

const DataAnalysis = () => {
  const [countData, setCountData] = useState(0);

    useEffect(()=>{
      let totalCount = 0;
      labelsData.forEach(label => {
        totalCount += label.count;
      });
      setCountData(totalCount);
    }, [])
  const [userLabelData, setUserLabelData] = useState({
    labels: labelsData.map((data) => data.sign_desc),
    datasets: [
      {
        axis: "y",
        label: "Count",
        data: labelsData.map((data) => data.count),
        backgroundColor: ["green"],
        borderRadius: 5,
        barPercentage: 0.2,
        borderSkipped: false,
      },
    ],
  });

  return (
    <Layoutp>
<<<<<<< HEAD
      <div className="flex flex-col w-full items-center gap-8 m-20">
        <div className="flex flex-col">
          <span className='font-bold text-xl text-[var(--green-dark)]'>ANÁLISIS DE DATOS</span>
          <div className='flex gap-4 items-center'>
              <span className='font-bold text-3xl text-[var(--grey-dark)]'>{countData}</span>
              <span className='text-[var(--grey-light)]'>Videos e Imagenes</span>
          </div>
        </div>
=======
      <section className={styles.Wrapper}>
        <header className={styles.Header}>
          <h3 className={styles.Title}>Análisis de Datos</h3>
          <div className={styles.Information}>
            <span className={styles.Cantidad}>375</span>
            <span className={styles.Message}>Videos e Imagenes</span>
          </div>
        </header>
>>>>>>> a4d18b2842081f4909245bce146fe8203b29ded8
        <div style={{ width: 600, height: 300 }}>
          <ChartData charData={userLabelData} />
        </div>
      </section>
    </Layoutp>
  );
};

export default DataAnalysis;
