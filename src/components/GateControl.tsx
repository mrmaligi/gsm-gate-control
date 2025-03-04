"use client";

import { useState } from "react";
import { Lock, Unlock, Phone } from "lucide-react";

export default function GateControl() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendSMS = (command: string) => {
    if (!phoneNumber) {
      alert("Please enter a phone number.");
      return;
    }
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(command)}`;
    window.location.href = smsUrl;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>GSM Gate Control</h2>
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => sendSMS("OPEN")}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#00bfff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Unlock size={20} style={{ marginRight: '5px' }} />
          Open
        </button>
        <button
          onClick={() => sendSMS("CLOSE")}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#ff4500',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Lock size={20} style={{ marginRight: '5px' }} />
          Close
        </button>
      </div>
    </div>
  );
}
