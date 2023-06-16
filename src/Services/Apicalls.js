import axios from "axios";
const port= "http://localhost:7000/"

export const registerMe = (register) => {
  return axios.post(`${port}user`, register);
};
export const logMe = (credentials) => {
  return axios.post("http://localhost:7000/user/login", credentials);
};

export const bringProfile = async (credentials) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.get(
      `http://localhost:7000/user/${credentials.token.id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const bringAllProfiles = async (credentials, seek) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
      params: {
        name: seek,
      },
    };

    const response = await axios.get(`http://localhost:7000/user`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfile = async (credentials, id) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:7000/user/${id}`,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const bringBooking = async (credentials) => {
  console.log(credentials, "soy credentials");
  try {
    let config = {
      headers: {
        Authorization: `Berarer ${credentials.bearer}`,
      },
    };
    const response = await axios.get(`http://localhost:7000/bookings`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createBooking = async (credentials, body) => {
  try {
    let config = {
      headers: {
        Authorization: `bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.post(
      `http://localhost:7000/bookings`,
      body,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const modifyBookingBack = async (credentials, id, body) => {
  // console.log(credentials,'olacredendial'),
  // console.log(id,'hola id')
  // console.log(body,'holabody')

  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.put(
      `http://localhost:7000/bookings/${id}`,
      body,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteBookingBack = async (credentials, id) => {
  // console.log(credentials, "olacredendial"), console.log(id, "hola id");

  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:7000/bookings/${id}`,config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCircuit = async () => {
  const response = await axios.get(`http://localhost:7000/circuit`);
  return response.data;
};
export const getOpinion = async () => {
  const response = await axios.get(`http://localhost:7000/opinion`);
  return response.data;
};

export const createReview = async (credentials, body) => {
  console.log(body,'soy body')
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };

    const response = await axios.post(
      `http://localhost:7000/opinion`,
      body,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
