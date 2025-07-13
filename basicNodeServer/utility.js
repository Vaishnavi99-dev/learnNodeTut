const getLatestId = data => data.map(elem => Number(elem._id)).sort((a,b) => a-b)[data.length - 1];

export default getLatestId;