import axios from "axios";
const route= "http://localhost:7000/"

export const registerMe = (register) => {
  return axios.post(`${route}user`, register);
};
export const logMe = (credentials) => {
  return axios.post(`${route}user/login`, credentials);
};

export const bringProfile = async (credentials) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.get(
      `${route}user/${credentials.token.id}`,
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

    const response = await axios.get(`${route}user`, config);
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
      `${route}user/${id}`,
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
    const response = await axios.get(`${route}bookings`, config);
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
      `${route}bookings`,
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
      `${route}bookings/${id}`,
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
      `${route}bookings/${id}`,config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCircuit = async () => {
  const response = await axios.get(`${route}circuit`);
  return response.data;
};
export const getOpinion = async () => {
  const response = await axios.get(`${route}opinion`);
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
      `${route}opinion`,
      body,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const deleteReview = async (credentials, id) => {
  console.log(credentials, "olacredendial"), console.log(id, "hola id");

  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.delete(
      `${route}opinion/${id}`,config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const modifyProfilee = async (credentials, id, body) => {
  console.log(credentials,'olacredendial'),
  console.log(id,'hola id')
  console.log(body,'holabody')

  try {
    let config = {
      headers: {
        Authorization: `Bearer ${credentials.bearer}`,
      },
    };
    const response = await axios.put(
      `${route}user/${id}`,
      body,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};