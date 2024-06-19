import React, { useState, useEffect } from 'react';
import fetchCountries from '../api/CountryList';
import fetchCities from '../api/CityList';
import createStudent from '../api/CreateStudent';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getCountries = async () => {
      const countryList = await fetchCountries();
      setCountries(countryList);
    };

    getCountries();

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setAge('');
  }, []);

  const handleCountryChange = async (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    if (countryId) {
      const cityList = await fetchCities(countryId);
      setCities(cityList);
    } else {
      setCities([]);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      await createStudent({
        firstname,
        lastname,
        email,
        password,
        age,
        country: selectedCountry,
        city: selectedCity,
      });
      // Reset form fields upon successful submission
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setAge('');
      setSelectedCountry('');
      setSelectedCity('');

      navigate('/');
    } catch (err) {
      setError(err.message || 'Error creating student'); // Set error message from backend
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <select name="country" value={selectedCountry} onChange={handleCountryChange} required>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country._id} value={country._id}>
            {country.name}
          </option>
        ))}
      </select>

      <select name="city" value={selectedCity} onChange={handleCityChange} required>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city._id} value={city._id}>
            {city.name}
          </option>
        ))}
      </select>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      <button type="submit">Create Student</button>
    </form>
  );
};

export default StudentForm;
