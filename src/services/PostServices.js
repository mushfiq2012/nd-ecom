/**
 * The only POST methods will go here.
 *
 */
import api from '../boot/axios'

async function getHeroComponent() {
  try {
    const response = await api.get('/ads/getad', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true
    })
    return response.data // Assuming response is in JSON format
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

async function getDepartmentPromotions() {
  try {
    const response = await api.get('/ads/getDepartment', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true
    })
    console.log(response)
    return response.data // Assuming response is in JSON format
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
async function getSeasonalDepartment() {
  try {
    const response = await api.get('/ads/getSeasonalDepartment', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true
    })
    console.log(response)
    return response.data // Assuming response is in JSON format
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
async function getSeasonalDepartmentPromotion() {
  try {
    const response = await api.get('/ads/getSeasonalDepartmentPromotion', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true
    })
    console.log(response)
    return response.data // Assuming response is in JSON format
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
async function getDepartments() {
  try {
    const response = await api.get('/ads/getDepartments', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true
    })
    console.log(response)
    return response.data // Assuming response is in JSON format
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
async function getProducts() {
  try {
    const response = await api.get('/ads/getProducts', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true
    })
    console.log(response)
    return response.data // Assuming response is in JSON format
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default {
  getHeroComponent,
  getDepartmentPromotions,
  getSeasonalDepartment,
  getSeasonalDepartmentPromotion,
  getDepartments,
  getProducts
}
