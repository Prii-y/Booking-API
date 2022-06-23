import express from 'express';
import Hotels from '../Models/Hotels.js';
import { createrror } from '../utils/Error.js';
import { createHotel,updateHotels,deleteHotels,getHotels,getallHotels } from '../controllers/hotel.js';
const router=express.Router();


router.post('/', createHotel);

router.put('/:id',updateHotels)

router.delete('/:id',deleteHotels)

router.get('/:id',getHotels);

//GET ALL

router.get('/',getallHotels);

export default router;