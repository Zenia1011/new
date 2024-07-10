import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [language, setLanguage] = useState(i18n.language);

  const requestOtp = async () => {
    try {
      await axios.post('/auth/request-reset-password', { email, phone, language });
      alert('OTP sent!');
    } catch (error) {
      console.error(error);
      alert('Error sending OTP');
    }
  };

  const resetPassword = async () => {
    try {
      await axios.post('/auth/reset-password', { email, phone, otp, newPassword });
      alert('Password reset successfully!');
    } catch (error) {
      console.error(error);
      alert('Error resetting password');
    }
  };

  return (
    <div style={{ backgroundColor: language === 'hi' ? 'blue' : language === 'zh' ? 'green' : language === 'fr' ? 'yellow' : 'white' }}>
      <h1>{t('reset_password')}</h1>
      <select value={language} onChange={(e) => { i18n.changeLanguage(e.target.value); setLanguage(e.target.value); }}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="pt">Portuguese</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
      </select>
      {language === 'fr' ? (
        <input
          type="email"
          placeholder={t('email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={t('phone')}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      )}
      <button onClick={requestOtp}>{t('request_otp')}</button>
      <input
        type="text"
        placeholder={t('otp')}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <input
        type="password"
        placeholder={t('new_password')}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={resetPassword}>{t('submit')}</button>
    </div>
  );
};

export default ResetPassword;
