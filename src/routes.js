const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const DirectoryController = require('./controllers//DirectoryController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');
const NewsController = require('./controllers/NewsController');
const NewsDashboardController = require('./controllers/NewsDashboardController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/user', UserController.store);
routes.post('/message', MessageController.store);
routes.post('/directories', upload.single('thumbnail'), DirectoryController.store);
routes.post('/news', upload.single('thumbnail'), NewsController.store);

routes.post('/directories/:directory_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

routes.get('/directories', DirectoryController.index);
routes.get('/news', NewsController.index);

routes.get('/users', UserController.index);
routes.get('/dashboard', DashboardController.show);
routes.get('/newsDasboard', NewsDashboardController.show);

module.exports = routes;
