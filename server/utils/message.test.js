var expect=require('expect');

var {generateMessage,generateLocationMessage}=require('./message');

describe('generate message',()=>{
	it('should generate correct message object',()=>{
		var msgObj=generateMessage('Biplav','hey there');
		// expect(msgObj.from==='Biplav');
		// expect(msgObj.text==='hey there');
		expect(typeof msgObj.createdAt).toBe('number');
		expect(msgObj).toMatchObject({from:'Biplav',text:'hey there'});
	})
});

describe('generate Location Message',()=>{
	it('should generate correct location message object',()=>{
		var locationObj=generateLocationMessage('Biplav',39.52,-119.717);
		expect(typeof locationObj.createdAt).toBe('number');
		expect(locationObj).toMatchObject({from:'Biplav',url:`https://www.google.com/maps?q=39.52,-119.717`});
	})
})