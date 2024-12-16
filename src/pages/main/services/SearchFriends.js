import { apiUrl } from "../../../config/config";

const SearchFriends = async (name, uid) => {
  try {
    const response = await fetch(`${apiUrl}/user/friends/search`, {
      method: "POST",
      body: JSON.stringify({ name, uid }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default SearchFriends;
