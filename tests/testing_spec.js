/**
* Spec for checking on some of the testing support.
*/
describe('Jasmine Testing', function() {

   describe("Jasmine", function() {
      it("should allow assertions that are true", function() {
         expect(true).toBeTruthy();
      });

      it("should allow assertions that are false", function() {
         expect(false).toBeFalsy();
      });

      it("should test me", function() {
         console.log('aa');
         expect(true).toEqual(true);
      });
   });

});




