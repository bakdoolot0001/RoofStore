"use client";
import { useState } from "react";
import styles from "./Quiz.module.scss";
import ProgressBar from "@/components/pages/progressBar/ProgressBar";

type Question = {
  id: number;
  title: string;
  options?: string[];
  input?: boolean;
  unit?: string;
};

const questions: Question[] = [
  {
    id: 1,
    title: "Выберите тип вашей крыши",
    options: [
      "Односкатная",
      "Двускатная",
      "Четырехскатная",
      "Мансардная",
      "Другая",
    ],
  },
  {
    id: 2,
    title: "Выберите тип покрытия",
    options: ["Металлочерепица", "Профнастил", "Фальцевая кровля"],
  },
  {
    id: 3,
    title: "Выберите блеск поверхности",
    options: ["Глянцевая", "Матовая"],
  },
  {
    id: 4,
    title: "Выберите толщину",
    options: [
      "0.3–0.35 мм",
      "0.4–0.45 мм",
      "0.5–0.55 мм",
      "0.7 мм",
      "0.8 мм",
      "0.9 мм",
    ],
  },
  {
    id: 5,
    title: "Укажите площадь кровли",
    input: true,
    unit: "м²",
  },
  {
    id: 6,
    title: "Включаем доборные элементы?",
    options: ["Да, важна полная стоимость", "Только стоимость черепицы"],
  },
];

type Answers = Record<number, string>;

export default function Quiz() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [form, setForm] = useState<{ name: string; phone: string }>({
    name: "",
    phone: "",
  });

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    console.log("Ответы:", answers, "Форма:", form);
    alert("Спасибо! Мы свяжемся с вами.");
  };

  return (
    <div className={styles.quiz}>
      <h2 className={styles.title}>
        Пройдите тест и рассчитайте стоимость кровли под ваш объект
      </h2>

      <ProgressBar percent={((step + 1) / questions.length) * 86} />

      {step < questions.length ? (
        <div className={styles.card}>
          <h3>{questions[step].title}</h3>

          {/* Варианты ответов */}
          {questions[step].options && (
            <div className={styles.options}>
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className={styles.optionBtn}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Ввод числа (площадь) */}
          {questions[step].input && (
            <div className={styles.inputBox}>
              <input
                type="number"
                placeholder="Введите значение"
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [questions[step].id]: e.target.value,
                  })
                }
              />
              <span>{questions[step].unit}</span>
              <button
                onClick={() => setStep(step + 1)}
                className={styles.nextBtn}
              >
                Далее
              </button>
            </div>
          )}

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className={styles.backBtn}
            >
              Назад
            </button>
          )}
        </div>
      ) : (
        <div className={styles.card}>
          <h3>Готово! Введите контакты:</h3>
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <button onClick={handleSubmit} className={styles.submitBtn}>
            Рассчитать стоимость
          </button>
        </div>
      )}
    </div>
  );
}
