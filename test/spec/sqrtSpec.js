describe("sqrt", function() {

  it("should compute the square root of 4 as 2", function() {
    expect(My.sqrt(4)).toEqual(2);
  });

  it("should throw an exception if given a negative number", function() {
    expect(function(){ My.sqrt(-1); }).toThrow(new Error("sqrt can't work on negative number"));
  });

});
