var expect=require('expect');

var {generateMessage}=require('./message');

describe('generate message',()=>{
	it('should generate correct message object',()=>{
		var msgObj=generateMessage('Biplav','hey there');
		// expect(msgObj.from==='Biplav');
		// expect(msgObj.text==='hey there');
		expect(typeof msgObj.createdAt).toBe('number');
		expect(msgObj).toMatchObject({from:'Biplav',text:'hey there'});
	})
});