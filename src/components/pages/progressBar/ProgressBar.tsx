import styles from "@/components/pages/quiz/Quiz.module.scss";

type Props = {
  percent: number;
};

export default function ProgressBar({ percent }: Props) {
  return (
    <div className={styles.progress}>
      <div className={styles.progressFill} style={{ width: `${percent}%` }}>
        <span className={styles.progressText}>{percent}%</span>
      </div>
    </div>
  );
}
