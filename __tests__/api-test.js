import { 
    getUsers,
    getUser,
    getPostsForUser,
    createPostForUser
} from "../index"

// change this value to test with different userId
// should be a number between 1 and 10
const USER_ID = 1

describe('Mock API tests', () => {
    // example test using jest
    it('should get list of all users', async () => {
        const users = await getUsers()
        expect(users.length).toEqual(10)
    })

    it('should get user by id', async () => {
        const user = await getUser(USER_ID)
        expect(user.id).toEqual(USER_ID)
    })
})



//starting tests from here

test("Validate getUser: ID is a number", async () => {
    const user = await getUser(USER_ID)
    expect(typeof user.id).toBe("number");
});

test("Validate getUser: Name is a string", async () => {
    const user = await getUser(USER_ID)
    expect(typeof user.name).toBe("string");
});

test("Validate getUser: Name is not an empty string", async () => {
    const user = await getUser(USER_ID)
    expect(user.name).not.toBeNull();
});

test("Validate getUser: Username is a string", async () => {
    const user = await getUser(USER_ID)
    expect(typeof user.username).toBe("string");
});

test("Validate getUser: Username is not an empty string", async () => {
    const user = await getUser(USER_ID)
    expect(user.username).not.toBeNull();
});

test("Validate getUser: Email is in a valid format", async () => {
    const user = await getUser(USER_ID)
    expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

test("Validate getUser: Address is an object with required properties", async () => {
    const user = await getUser(USER_ID)
    const { address } = user;
    expect(typeof address.street).toBe("string");
    expect(typeof address.suite).toBe("string");
    expect(typeof address.city).toBe("string");
    expect(typeof address.zipcode).toBe("string");

    const { geo } = address;
    expect(typeof geo.lat).toBe("string");
    expect(typeof geo.lng).toBe("string");
});

test("Validate getUser: Phone is not an empty string", async () => {
    const user = await getUser(USER_ID)
    expect(user.phone).not.toBeNull();
});

test("Validate getUser: Website is not an empty string",  async () => {
    const user = await getUser(USER_ID)
    expect(user.website).not.toBeNull();
});

test("Validate getUser: Company is an object with required properties", async () => {
    const user = await getUser(USER_ID)
    const { company } = user;
    expect(typeof company.name).toBe("string");
    expect(typeof company.catchPhrase).toBe("string");
    expect(typeof company.bs).toBe("string");
});


test('Validate getUser: validate schema of response body', async () => {
    const user = await getUser(USER_ID) 
  
    // Define the expected schema
    const expectedSchema = {
      "id": expect.any(Number),
      "name": expect.any(String),
      "username": expect.any(String),
      "email": expect.stringMatching(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
      "address": {
        "street": expect.any(String),
        "suite": expect.any(String),
        "city": expect.any(String),
        "zipcode": expect.stringMatching(/^\d{5}(?:-\d{4})?$/),
        "geo": {
          "lat": expect.any(String),
          "lng": expect.any(String)
        }
      },
      "phone": expect.stringMatching(/^1-\d{3}-\d{3}-\d{4} x\d+$/),
      "website": expect.stringMatching(/^([a-z]+:\/\/)?[a-z0-9-]+(\.[a-z]{2,})?(:[0-9]+)?(\/.*)?$/),
      "company": {
        "name": expect.any(String),
        "catchPhrase": expect.any(String),
        "bs": expect.any(String)
      }
    };
  
    // Perform the validation
    expect(user).toEqual(expectedSchema);
  });
  

  
  
  test('Validate getPostsForUser: Verify Post IDs are integers between 1 and 100', async () => {
    const posts = await getPostsForUser(USER_ID)
    posts.forEach(post => {
      expect(post.id).toBeDefined();
      expect(typeof post.id).toBe('number');
      expect(post.id).toBeGreaterThanOrEqual(1);
      expect(post.id).toBeLessThanOrEqual(100);
    });
  });

  test('Validate getPostsForUser: Verify data types of response body', async () => {
    const posts = await getPostsForUser(USER_ID)
    posts.forEach(post => {
      expect(typeof post.userId).toBe('number');
      expect(typeof post.id).toBe('number');
      expect(typeof post.title).toBe('string');
      expect(typeof post.body).toBe('string');
    });
  });
  


  test('Validate createPostForUser: Request to create a post', async () => {
    const response = await createPostForUser(USER_ID)
    const requestBody = {
        title: 'foo',
        body: 'bar',
        userId: USER_ID,
    };

    const responseBody = await response.json();

    // Validate the response
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.title).toBe(requestBody.title);
    expect(responseBody.body).toBe(requestBody.body);
    expect(responseBody.userId).toBe(requestBody.userId);
});

test('Validate createPostForUser: Verify data types of response body', async () => {
    const response = await createPostForUser(USER_ID)
    const responseBody = await response.json();
    
      expect(typeof responseBody.title).toBe('string');
      expect(typeof responseBody.body).toBe('string');
      expect(typeof responseBody.id).toBe('number');
      expect(typeof responseBody.userId).toBe('number');
    
  });
