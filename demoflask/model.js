const tf = require('@tensorflow/tfjs-node');
const model = await tf.loadLayersModel('');
model.loadWeights('C:\\Users\\CHETANA\\Downloads\\malaria_cnn_model.h5');

