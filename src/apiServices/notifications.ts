import axios from "axios"

export const getNotificationsList = async() => {
  try {
    const { data } = await axios.get('https://e-tag.pro/testjob/list.json')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCasesList = async() => {
  try {
    const { data } = await axios.get('https://e-tag.pro/testjob/cases.json')
    return data
  } catch (error) {
    console.log(error)
  }
}