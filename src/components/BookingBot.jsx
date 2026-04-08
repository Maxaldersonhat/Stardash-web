import { useState, useRef } from 'react';
import './BookingBot.css';
import { STEPS, STEP_LABELS } from './steps.js';
import { useParticleCanvas } from './Useparticlescanvas.js';
import { sendBookingEmail } from './Emailservice.js';
import sendicon from '../assets/send.png';
import Boticon from '../assets/robot.png';

// ── Config ──────────────────────────────────────────────────────
const WA_NUMBER    = '254716533478';
const COMPANY_NAME = 'Stardash Services';

// ── Icon components ──────────────────────────────────────────────




function ChatIcon({ open }) {
  return (
    <>
      <img src={Boticon} alt="" className="bb-fab-icon" />
      <span className="bb-fab-label">
        {open ? 'Close' : 'Booking Bot'}
      </span>
    </>
  );
}
// ── Main component ───────────────────────────────────────────────

export default function BookingBot() {
  const [open, setOpen]             = useState(false);
  const [step, setStep]             = useState(0);
  const [answers, setAnswers]       = useState({});
  const [textVal, setTextVal]       = useState('');
  const [phase, setPhase]           = useState('questions');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState('');
  const inputRef = useRef(null);

  const canvasRef = useParticleCanvas(open);

  const progress =
    phase === 'summary' || phase === 'success'
      ? 100
      : (step / STEPS.length) * 100;

  function selectOption(key, value) {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    setTimeout(() => advance(updated), 300);
  }

  function confirmText() {
    const val = textVal.trim();
    if (!val) return;
    const updated = { ...answers, [STEPS[step].key]: val };
    setAnswers(updated);
    setTextVal('');
    advance(updated);
  }

  function advance(current) {
    const next = step + 1;
    if (next < STEPS.length) {
      setStep(next);
      setTextVal(current[STEPS[next].key] ?? '');
    } else {
      setPhase('summary');
    }
  }

  function goBack() {
    if (phase === 'summary') {
      setPhase('questions');
      const prev = STEPS.length - 1;
      setStep(prev);
      setTextVal(answers[STEPS[prev].key] ?? '');
      return;
    }
    if (step > 0) {
      const prev = step - 1;
      setStep(prev);
      setTextVal(answers[STEPS[prev].key] ?? '');
    }
  }

  async function handleSubmit() {
    setError('');
    setSubmitting(true);
    try {
      await sendBookingEmail(answers);
      setPhase('success');
    } catch {
      setError('Could not send. Please try WhatsApp or call us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  function openWa(msg) {
    const text = msg ?? `Hi, I'd like to book a ${answers.service ?? 'cleaning'} service.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  }

  function renderStepDisplay() {
    if (phase === 'summary') {
      return (
        <>
          <div className="bb-step-icon" key="sum-icon">📋</div>
          <p className="bb-step-q">Here's your booking summary</p>
          <p className="bb-step-sub">Review before we send it off</p>
        </>
      );
    }
    if (phase === 'success') {
      return (
        <>
          <div className="bb-step-icon" key="ok-icon">✅</div>
          <p className="bb-step-q bb-step-q--success">Booking request sent!</p>
          <p className="bb-step-sub">We'll reach out within 2 hours</p>
        </>
      );
    }
    const s = STEPS[step];
    return (
      <>
        <div className="bb-step-icon" key={"icon-" + step}>{s.icon}</div>
        <p className="bb-step-q" key={"q-" + step}>{s.q}</p>
        {s.sub && <p className="bb-step-sub" key={"sub-" + step}>{s.sub}</p>}
      </>
    );
  }

  function renderBody() {
    if (phase === 'success') {
      return (
        <div className="bb-success-view">
          <p>Prefer to chat directly?</p>
          <button
            className="bb-wa-follow-up"
            onClick={() => openWa("Hi, I just submitted a booking for " + (answers.service ?? 'cleaning') + ".")}
          >
            💬&nbsp; Continue on WhatsApp
          </button>
        </div>
      );
    }

    if (phase === 'summary') {
      return (
        <>
          <ul className="bb-summary-list">
            {Object.entries(answers).map(([k, v]) => (
              <li key={k}>
                <span className="bb-summary-lbl">{STEP_LABELS[k] ?? k}</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
          {error && <div className="bb-error-banner">{error}</div>}
          <button
            className="bb-submit-btn"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? 'Sending…' : '  Send Booking Request'}
          </button>
          <div className="bb-nav-row">
            <button className="bb-nav-back" onClick={goBack}>← Edit answers</button>
          </div>
        </>
      );
    }

    const s = STEPS[step];

    if (s.type === 'options') {
      return (
        <>
          <div className={"bb-options-grid" + (s.cols === 2 ? ' bb-cols-2' : '')}>
            {s.options.map((opt) => (
              <button
                key={opt}
                className={"bb-opt-btn" + (answers[s.key] === opt ? ' bb-selected' : '')}
                onClick={() => selectOption(s.key, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="bb-nav-row">
            {step > 0
              ? <button className="bb-nav-back" onClick={goBack}>← Back</button>
              : <span />}
            <span className="bb-step-counter">{step + 1} / {STEPS.length}</span>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="bb-text-input-wrap">
          <input
            ref={inputRef}
            type="text"
            placeholder={s.placeholder}
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && confirmText()}
            autoFocus
          />
          <div className="bb-send-btn" onClick={confirmText} aria-label="Next">
            <img src ={sendicon} alt="Send" className="sendicon" />
          </div>
        </div>
        <div className="bb-nav-row">
          {step > 0
            ? <button className="bb-nav-back" onClick={goBack}>← Back</button>
            : <span />}
          <span className="bb-step-counter">{step + 1} / {STEPS.length}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={"bb-window" + (open ? ' bb-open' : '')}
        role="dialog"
        aria-label="Booking assistant"
      >
        <div className="bb-header">
          <div className="bb-avatar">🧹</div>
          <div className="bb-header-text">
            <h3>{COMPANY_NAME}</h3>
            <p>Book a cleaning service</p>
          </div>
          <div className="bb-status-dot" aria-hidden="true" />
        </div>

        <div className="bb-canvas-wrap">
          <canvas ref={canvasRef} className="bb-particle-canvas" aria-hidden="true" />
          <div className="bb-step-display">{renderStepDisplay()}</div>
          <div className="bb-progress-wrap">
            <div className="bb-progress-bar" style={{ width: progress + '%' }} />
          </div>
        </div>

        <div className="bb-body">{renderBody()}</div>
      </div>

      <div className="bb-fab-group">
        

        <button
  className={"bb-fab-main" + (open ? ' bb-open' : '')}
  onClick={() => setOpen((o) => !o)}
  aria-label={open ? 'Close booking assistant' : 'Open booking assistant'}
>
  <ChatIcon open={open} />
</button>
      </div>
    </>
  );
}