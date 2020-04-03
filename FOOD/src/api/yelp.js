import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _AUuBM478HdQQLUcfpyc6BX4TXg3YTMbctYAsSPAqqPTMCFh2za_EMW9LxgC2_2UB2-5hc_Dl1sAVPZi57BlsoeshCukqM27shd8IFNbmpxl3UgD6oV9IdklX62GXnYx'
    }
});

