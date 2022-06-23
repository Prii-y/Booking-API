import express from 'express';
const router =express.Router();

router.get('/',()=>{
    console.log('rooms');
})

export default router;