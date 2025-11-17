import { LearningActivity } from '../types';

// Comprehensive learning activity database with specific practice exercises
export const learningActivities: LearningActivity[] = [
  // ========== ALGEBRA (15 activities) ==========
  {
    id: 'alg-001',
    title: 'Introduction to Variables',
    description: 'Understand what variables are and how they represent unknown values in mathematical expressions',
    topic: 'Algebra',
    difficulty: 'easy',
    estimatedTime: 10,
    completed: false,
    exercises: [
      {
        id: 'alg-001-ex1',
        question: 'If x = 5, what is the value of 3x + 2?',
        answer: '17',
        hint: 'Substitute 5 for x, then multiply and add'
      },
      {
        id: 'alg-001-ex2',
        question: 'Simplify: 2y + 3y',
        answer: '5y',
        hint: 'Combine like terms'
      },
      {
        id: 'alg-001-ex3',
        question: 'If a = 4, what is a² - a?',
        answer: '12',
        hint: 'Remember a² means a × a'
      },
      {
        id: 'alg-001-ex4',
        question: 'Write an expression for "5 more than twice a number n"',
        answer: '2n + 5',
        hint: 'Twice n is 2n, then add 5'
      }
    ]
  },
  {
    id: 'alg-002',
    title: 'Basic Algebraic Operations',
    description: 'Learn fundamental algebraic operations including addition, subtraction, multiplication, and division with variables',
    topic: 'Algebra',
    difficulty: 'easy',
    estimatedTime: 15,
    completed: false,
    exercises: [
      {
        id: 'alg-002-ex1',
        question: 'Simplify: 4x + 3x - 2x',
        answer: '5x',
        hint: 'Add and subtract the coefficients'
      },
      {
        id: 'alg-002-ex2',
        question: 'Multiply: 3a × 5a',
        answer: '15a²',
        hint: 'Multiply coefficients and add exponents'
      },
      {
        id: 'alg-002-ex3',
        question: 'Simplify: 12y ÷ 4',
        answer: '3y',
        hint: 'Divide the coefficient by 4'
      },
      {
        id: 'alg-002-ex4',
        question: 'Combine: 7m + 3 - 2m + 5',
        answer: '5m + 8',
        hint: 'Group like terms together'
      }
    ]
  },
  {
    id: 'alg-003',
    title: 'Solving Simple Linear Equations',
    description: 'Master the techniques for solving one-variable linear equations step by step',
    topic: 'Algebra',
    difficulty: 'easy',
    estimatedTime: 20,
    completed: false,
    exercises: [
      {
        id: 'alg-003-ex1',
        question: 'Solve: x + 7 = 12',
        answer: 'x = 5',
        hint: 'Subtract 7 from both sides'
      },
      {
        id: 'alg-003-ex2',
        question: 'Solve: 3y = 15',
        answer: 'y = 5',
        hint: 'Divide both sides by 3'
      },
      {
        id: 'alg-003-ex3',
        question: 'Solve: 2x - 4 = 10',
        answer: 'x = 7',
        hint: 'First add 4, then divide by 2'
      },
      {
        id: 'alg-003-ex4',
        question: 'Solve: 5 + a = 3a - 7',
        answer: 'a = 6',
        hint: 'Get all a terms on one side'
      },
      {
        id: 'alg-003-ex5',
        question: 'Solve: (x/2) + 3 = 8',
        answer: 'x = 10',
        hint: 'Subtract 3, then multiply by 2'
      }
    ]
  },
  {
    id: 'alg-004',
    title: 'Working with Negative Numbers',
    description: 'Practice operations with negative numbers and understand the rules of signs in algebra',
    topic: 'Algebra',
    difficulty: 'easy',
    estimatedTime: 15,
    completed: false,
    exercises: [
      {
        id: 'alg-004-ex1',
        question: 'Calculate: -3 + 8',
        answer: '5',
        hint: 'Think of it as 8 - 3'
      },
      {
        id: 'alg-004-ex2',
        question: 'Calculate: -5 × -4',
        answer: '20',
        hint: 'Negative times negative equals positive'
      },
      {
        id: 'alg-004-ex3',
        question: 'Simplify: -2x + 5x - 3x',
        answer: '0',
        hint: '-2 + 5 - 3 = 0'
      },
      {
        id: 'alg-004-ex4',
        question: 'Calculate: -12 ÷ -3',
        answer: '4',
        hint: 'Negative divided by negative equals positive'
      }
    ]
  },
  {
    id: 'alg-005',
    title: 'Distributive Property',
    description: 'Learn to expand expressions using the distributive property a(b + c) = ab + ac',
    topic: 'Algebra',
    difficulty: 'medium',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'alg-005-ex1',
        question: 'Expand: 3(x + 4)',
        answer: '3x + 12',
        hint: 'Multiply 3 by each term inside'
      },
      {
        id: 'alg-005-ex2',
        question: 'Expand: -2(3y - 5)',
        answer: '-6y + 10',
        hint: 'Watch the signs carefully'
      },
      {
        id: 'alg-005-ex3',
        question: 'Simplify: 4(2a + 3) - 5a',
        answer: '3a + 12',
        hint: 'First distribute, then combine like terms'
      },
      {
        id: 'alg-005-ex4',
        question: 'Expand: (x + 2)(x + 3)',
        answer: 'x² + 5x + 6',
        hint: 'Use FOIL method'
      }
    ]
  },
  {
    id: 'alg-006',
    title: 'Combining Like Terms',
    description: 'Simplify algebraic expressions by identifying and combining like terms',
    topic: 'Algebra',
    difficulty: 'medium',
    estimatedTime: 20,
    completed: false,
    exercises: [
      {
        id: 'alg-006-ex1',
        question: 'Simplify: 5x + 3y - 2x + 7y',
        answer: '3x + 10y',
        hint: 'Combine x terms and y terms separately'
      },
      {
        id: 'alg-006-ex2',
        question: 'Simplify: 2a² + 3a - a² + 5a',
        answer: 'a² + 8a',
        hint: 'Group terms by their exponents'
      },
      {
        id: 'alg-006-ex3',
        question: 'Simplify: 4(x + 2) + 3(x - 1)',
        answer: '7x + 5',
        hint: 'Distribute first, then combine'
      }
    ]
  },
  {
    id: 'alg-007',
    title: 'Multi-Step Linear Equations',
    description: 'Solve complex linear equations that require multiple steps and operations',
    topic: 'Algebra',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'alg-007-ex1',
        question: 'Solve: 2(x + 3) = 14',
        answer: 'x = 4',
        hint: 'First distribute, or divide both sides by 2'
      },
      {
        id: 'alg-007-ex2',
        question: 'Solve: 3y - 7 = 2y + 5',
        answer: 'y = 12',
        hint: 'Get y terms on one side, constants on other'
      },
      {
        id: 'alg-007-ex3',
        question: 'Solve: 4(x - 2) + 3x = 20',
        answer: 'x = 4',
        hint: 'Distribute, combine, then solve'
      },
      {
        id: 'alg-007-ex4',
        question: 'Solve: (2x + 5)/3 = 7',
        answer: 'x = 8',
        hint: 'Multiply both sides by 3 first'
      }
    ]
  },
  {
    id: 'alg-008',
    title: 'Equations with Variables on Both Sides',
    description: 'Master techniques for solving equations where variables appear on both sides',
    topic: 'Algebra',
    difficulty: 'medium',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'alg-008-ex1',
        question: 'Solve: 5x + 3 = 3x + 11',
        answer: 'x = 4',
        hint: 'Subtract 3x from both sides'
      },
      {
        id: 'alg-008-ex2',
        question: 'Solve: 7y - 4 = 2y + 16',
        answer: 'y = 4',
        hint: 'Move all y terms to left, constants to right'
      },
      {
        id: 'alg-008-ex3',
        question: 'Solve: 3(a + 2) = 2(a - 1) + 15',
        answer: 'a = 7',
        hint: 'Distribute both sides first'
      }
    ]
  },
  {
    id: 'alg-009',
    title: 'Introduction to Quadratic Equations',
    description: 'Understand what quadratic equations are and their standard form ax² + bx + c = 0',
    topic: 'Algebra',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'alg-009-ex1',
        question: 'Identify a, b, c in: 2x² + 5x - 3 = 0',
        answer: 'a=2, b=5, c=-3',
        hint: 'Compare to standard form ax² + bx + c = 0'
      },
      {
        id: 'alg-009-ex2',
        question: 'Is x² = 16 a quadratic equation?',
        answer: 'Yes',
        hint: 'It can be written as x² - 16 = 0'
      },
      {
        id: 'alg-009-ex3',
        question: 'Rewrite in standard form: x² = 2x + 8',
        answer: 'x² - 2x - 8 = 0',
        hint: 'Move all terms to one side'
      }
    ]
  },
  {
    id: 'alg-010',
    title: 'Factoring Quadratics',
    description: 'Learn various methods for factoring quadratic expressions including grouping and trinomials',
    topic: 'Algebra',
    difficulty: 'hard',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'alg-010-ex1',
        question: 'Factor: x² + 7x + 12',
        answer: '(x + 3)(x + 4)',
        hint: 'Find two numbers that multiply to 12 and add to 7'
      },
      {
        id: 'alg-010-ex2',
        question: 'Factor: x² - 9',
        answer: '(x + 3)(x - 3)',
        hint: 'Difference of squares'
      },
      {
        id: 'alg-010-ex3',
        question: 'Factor: 2x² + 7x + 3',
        answer: '(2x + 1)(x + 3)',
        hint: 'Use grouping or trial and error'
      },
      {
        id: 'alg-010-ex4',
        question: 'Solve by factoring: x² + 5x + 6 = 0',
        answer: 'x = -2 or x = -3',
        hint: 'Factor first, then use zero product property'
      }
    ]
  },
  {
    id: 'alg-011',
    title: 'Quadratic Formula',
    description: 'Apply the quadratic formula to solve any quadratic equation and understand the discriminant',
    topic: 'Algebra',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'alg-011-ex1',
        question: 'Use quadratic formula: x² - 5x + 6 = 0',
        answer: 'x = 2 or x = 3',
        hint: 'x = (-b ± √(b² - 4ac)) / 2a'
      },
      {
        id: 'alg-011-ex2',
        question: 'Find discriminant of: 2x² + 3x - 5 = 0',
        answer: '49',
        hint: 'Discriminant = b² - 4ac'
      },
      {
        id: 'alg-011-ex3',
        question: 'How many real solutions does x² + 2x + 5 = 0 have?',
        answer: 'None (discriminant is negative)',
        hint: 'Check if b² - 4ac is positive, zero, or negative'
      }
    ]
  },
  {
    id: 'alg-012',
    title: 'Completing the Square',
    description: 'Master the technique of completing the square to solve quadratic equations and understand vertex form',
    topic: 'Algebra',
    difficulty: 'hard',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'alg-012-ex1',
        question: 'Complete the square: x² + 6x + ___',
        answer: '9',
        hint: 'Take half of 6, then square it'
      },
      {
        id: 'alg-012-ex2',
        question: 'Solve by completing: x² + 4x - 5 = 0',
        answer: 'x = 1 or x = -5',
        hint: 'Move -5 to right, complete square, solve'
      },
      {
        id: 'alg-012-ex3',
        question: 'Convert to vertex form: x² - 8x + 10',
        answer: '(x - 4)² - 6',
        hint: 'Complete the square and factor'
      }
    ]
  },
  {
    id: 'alg-013',
    title: 'Systems of Linear Equations',
    description: 'Solve systems of equations using substitution, elimination, and graphing methods',
    topic: 'Algebra',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'alg-013-ex1',
        question: 'Solve by substitution: x + y = 5 and x - y = 1',
        answer: 'x = 3, y = 2',
        hint: 'Solve first equation for x or y'
      },
      {
        id: 'alg-013-ex2',
        question: 'Solve by elimination: 2x + 3y = 12 and 2x - y = 4',
        answer: 'x = 3, y = 2',
        hint: 'Subtract equations to eliminate x'
      },
      {
        id: 'alg-013-ex3',
        question: 'System: x + 2y = 7 and 2x + 4y = 10. How many solutions?',
        answer: 'No solution (parallel lines)',
        hint: 'Check if slopes are equal'
      }
    ]
  },
  {
    id: 'alg-014',
    title: 'Inequalities and Number Lines',
    description: 'Solve and graph linear inequalities on number lines and understand interval notation',
    topic: 'Algebra',
    difficulty: 'medium',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'alg-014-ex1',
        question: 'Solve: 2x + 3 > 11',
        answer: 'x > 4',
        hint: 'Treat like equation, but watch direction of inequality'
      },
      {
        id: 'alg-014-ex2',
        question: 'Solve: -3x ≤ 12',
        answer: 'x ≥ -4',
        hint: 'When dividing by negative, flip inequality'
      },
      {
        id: 'alg-014-ex3',
        question: 'Write in interval notation: x > 3',
        answer: '(3, ∞)',
        hint: 'Use parentheses for > and <'
      }
    ]
  },
  {
    id: 'alg-015',
    title: 'Exponential Expressions and Laws',
    description: 'Work with exponential expressions and learn the laws of exponents',
    topic: 'Algebra',
    difficulty: 'hard',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'alg-015-ex1',
        question: 'Simplify: x³ · x⁵',
        answer: 'x⁸',
        hint: 'Add exponents when multiplying'
      },
      {
        id: 'alg-015-ex2',
        question: 'Simplify: (2x²)³',
        answer: '8x⁶',
        hint: 'Raise both coefficient and variable'
      },
      {
        id: 'alg-015-ex3',
        question: 'Simplify: x⁷ / x³',
        answer: 'x⁴',
        hint: 'Subtract exponents when dividing'
      },
      {
        id: 'alg-015-ex4',
        question: 'Simplify: (x⁻²)',
        answer: '1/x²',
        hint: 'Negative exponent means reciprocal'
      }
    ]
  },

  // ========== FUNCTIONS (15 activities) ==========
  {
    id: 'func-001',
    title: 'What is a Function?',
    description: 'Understand the fundamental concept of functions as relationships between inputs and outputs',
    topic: 'Functions',
    difficulty: 'easy',
    estimatedTime: 15,
    completed: false,
    exercises: [
      {
        id: 'func-001-ex1',
        question: 'Is this a function? {(1,2), (2,3), (3,4)}',
        answer: 'Yes',
        hint: 'Each input has exactly one output'
      },
      {
        id: 'func-001-ex2',
        question: 'Is this a function? {(1,2), (1,3), (2,4)}',
        answer: 'No',
        hint: 'Input 1 has two different outputs'
      },
      {
        id: 'func-001-ex3',
        question: 'If f(x) = 2x + 1, find f(3)',
        answer: '7',
        hint: 'Substitute 3 for x'
      }
    ]
  },
  {
    id: 'func-002',
    title: 'Function Notation f(x)',
    description: 'Learn to read and use function notation and evaluate functions at specific values',
    topic: 'Functions',
    difficulty: 'easy',
    estimatedTime: 20,
    completed: false,
    exercises: [
      {
        id: 'func-002-ex1',
        question: 'If g(x) = x² - 4, find g(0)',
        answer: '-4',
        hint: 'Replace x with 0'
      },
      {
        id: 'func-002-ex2',
        question: 'If h(t) = 3t + 5, find h(-2)',
        answer: '-1',
        hint: '3(-2) + 5'
      },
      {
        id: 'func-002-ex3',
        question: 'If f(x) = 2x, what is f(a + 1)?',
        answer: '2a + 2',
        hint: 'Replace x with (a + 1)'
      }
    ]
  },
  {
    id: 'func-003',
    title: 'Domain and Range',
    description: 'Identify the domain (input values) and range (output values) of various functions',
    topic: 'Functions',
    difficulty: 'easy',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'func-003-ex1',
        question: 'Domain of f(x) = x²',
        answer: 'All real numbers',
        hint: 'Can you square any real number?'
      },
      {
        id: 'func-003-ex2',
        question: 'Range of f(x) = x²',
        answer: 'y ≥ 0',
        hint: 'Can x² be negative?'
      },
      {
        id: 'func-003-ex3',
        question: 'Domain of f(x) = √x',
        answer: 'x ≥ 0',
        hint: 'Cannot take square root of negative'
      }
    ]
  },
  {
    id: 'func-004',
    title: 'Graphing Linear Functions',
    description: 'Plot linear functions on coordinate planes and understand slope-intercept form y = mx + b',
    topic: 'Functions',
    difficulty: 'easy',
    estimatedTime: 20,
    completed: false,
    exercises: [
      {
        id: 'func-004-ex1',
        question: 'What is the slope of y = 3x + 2?',
        answer: '3',
        hint: 'In y = mx + b, m is the slope'
      },
      {
        id: 'func-004-ex2',
        question: 'What is the y-intercept of y = -2x + 5?',
        answer: '5',
        hint: 'In y = mx + b, b is the y-intercept'
      },
      {
        id: 'func-004-ex3',
        question: 'Write in slope-intercept form: 2x + y = 6',
        answer: 'y = -2x + 6',
        hint: 'Solve for y'
      }
    ]
  },
  {
    id: 'func-005',
    title: 'Slope and Rate of Change',
    description: 'Calculate slope and interpret it as the rate of change in real-world contexts',
    topic: 'Functions',
    difficulty: 'medium',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'func-005-ex1',
        question: 'Find slope between points (2,3) and (5,9)',
        answer: '2',
        hint: 'Slope = (y₂ - y₁)/(x₂ - x₁)'
      },
      {
        id: 'func-005-ex2',
        question: 'A line passes through (0,4) with slope -3. Write equation.',
        answer: 'y = -3x + 4',
        hint: 'Use y = mx + b'
      },
      {
        id: 'func-005-ex3',
        question: 'What does slope = 0 mean?',
        answer: 'Horizontal line',
        hint: 'No change in y'
      }
    ]
  },
  {
    id: 'func-006',
    title: 'Graphing Quadratic Functions',
    description: 'Graph parabolas and identify key features like vertex, axis of symmetry, and intercepts',
    topic: 'Functions',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'func-006-ex1',
        question: 'Find vertex of f(x) = (x - 2)² + 3',
        answer: '(2, 3)',
        hint: 'Vertex form is f(x) = (x - h)² + k'
      },
      {
        id: 'func-006-ex2',
        question: 'Does f(x) = -x² + 4 open up or down?',
        answer: 'Down',
        hint: 'Negative coefficient means down'
      },
      {
        id: 'func-006-ex3',
        question: 'Find axis of symmetry: f(x) = x² - 6x + 5',
        answer: 'x = 3',
        hint: 'x = -b/(2a)'
      }
    ]
  },
  {
    id: 'func-007',
    title: 'Transformations of Functions',
    description: 'Understand how to shift, stretch, compress, and reflect functions on a graph',
    topic: 'Functions',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'func-007-ex1',
        question: 'How is g(x) = f(x) + 3 related to f(x)?',
        answer: 'Shifted up 3 units',
        hint: 'Adding outside shifts vertically'
      },
      {
        id: 'func-007-ex2',
        question: 'How is h(x) = f(x - 2) related to f(x)?',
        answer: 'Shifted right 2 units',
        hint: 'Subtracting inside shifts right'
      },
      {
        id: 'func-007-ex3',
        question: 'How is g(x) = -f(x) related to f(x)?',
        answer: 'Reflected over x-axis',
        hint: 'Negative sign flips vertically'
      }
    ]
  },
  {
    id: 'func-008',
    title: 'Piecewise Functions',
    description: 'Work with functions defined by different expressions over different intervals',
    topic: 'Functions',
    difficulty: 'medium',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'func-008-ex1',
        question: 'f(x) = {x² if x<0, 2x if x≥0}. Find f(-2)',
        answer: '4',
        hint: 'Since -2 < 0, use x²'
      },
      {
        id: 'func-008-ex2',
        question: 'Same function. Find f(3)',
        answer: '6',
        hint: 'Since 3 ≥ 0, use 2x'
      },
      {
        id: 'func-008-ex3',
        question: 'Absolute value |x| as piecewise function',
        answer: '{x if x≥0, -x if x<0}',
        hint: 'Think about when |x| equals x or -x'
      }
    ]
  },
  {
    id: 'func-009',
    title: 'Composite Functions',
    description: 'Learn to compose functions f(g(x)) and understand the order of operations',
    topic: 'Functions',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'func-009-ex1',
        question: 'If f(x)=2x and g(x)=x+3, find f(g(2))',
        answer: '10',
        hint: 'First find g(2), then apply f'
      },
      {
        id: 'func-009-ex2',
        question: 'Same functions. Find (f∘g)(x)',
        answer: '2x + 6',
        hint: 'f(g(x)) = f(x+3) = 2(x+3)'
      },
      {
        id: 'func-009-ex3',
        question: 'Is f(g(x)) = g(f(x))?',
        answer: 'Not always',
        hint: 'Order matters in composition'
      }
    ]
  },
  {
    id: 'func-010',
    title: 'Inverse Functions',
    description: 'Find inverse functions and understand the relationship between a function and its inverse',
    topic: 'Functions',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'func-010-ex1',
        question: 'Find inverse of f(x) = 2x + 3',
        answer: 'f⁻¹(x) = (x-3)/2',
        hint: 'Swap x and y, then solve for y'
      },
      {
        id: 'func-010-ex2',
        question: 'If f(3) = 7, what is f⁻¹(7)?',
        answer: '3',
        hint: 'Inverse function reverses the mapping'
      },
      {
        id: 'func-010-ex3',
        question: 'Find inverse of g(x) = x³',
        answer: 'g⁻¹(x) = ∛x',
        hint: 'Cube root undoes cubing'
      }
    ]
  },
  {
    id: 'func-011',
    title: 'Exponential Functions',
    description: 'Study exponential growth and decay functions and their real-world applications',
    topic: 'Functions',
    difficulty: 'hard',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'func-011-ex1',
        question: 'If f(x) = 2ˣ, find f(3)',
        answer: '8',
        hint: '2³ = 8'
      },
      {
        id: 'func-011-ex2',
        question: 'Population doubles every year. After 4 years, P = 16. Initial population?',
        answer: '1',
        hint: 'Work backwards: 16/2/2/2/2'
      },
      {
        id: 'func-011-ex3',
        question: 'Is f(x) = 3ˣ increasing or decreasing?',
        answer: 'Increasing',
        hint: 'Base > 1 means growth'
      }
    ]
  },
  {
    id: 'func-012',
    title: 'Logarithmic Functions',
    description: 'Understand logarithms as inverse operations of exponents and solve logarithmic equations',
    topic: 'Functions',
    difficulty: 'hard',
    estimatedTime: 45,
    completed: false,
    exercises: [
      {
        id: 'func-012-ex1',
        question: 'Evaluate: log₂(8)',
        answer: '3',
        hint: '2³ = 8'
      },
      {
        id: 'func-012-ex2',
        question: 'Evaluate: log₁₀(100)',
        answer: '2',
        hint: '10² = 100'
      },
      {
        id: 'func-012-ex3',
        question: 'Solve: log₅(x) = 2',
        answer: 'x = 25',
        hint: 'Convert to exponential form'
      }
    ]
  },
  {
    id: 'func-013',
    title: 'Polynomial Functions',
    description: 'Analyze polynomial functions including end behavior, zeros, and turning points',
    topic: 'Functions',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'func-013-ex1',
        question: 'Degree of f(x) = 3x⁴ - 2x² + 5?',
        answer: '4',
        hint: 'Highest power of x'
      },
      {
        id: 'func-013-ex2',
        question: 'As x→∞, f(x) = -x³ goes to?',
        answer: '-∞',
        hint: 'Negative leading coefficient, odd degree'
      },
      {
        id: 'func-013-ex3',
        question: 'Find zeros: f(x) = (x-2)(x+1)(x-3)',
        answer: 'x = 2, -1, 3',
        hint: 'Set each factor to zero'
      }
    ]
  },
  {
    id: 'func-014',
    title: 'Rational Functions',
    description: 'Work with rational functions, identify asymptotes, and analyze their behavior',
    topic: 'Functions',
    difficulty: 'hard',
    estimatedTime: 45,
    completed: false,
    exercises: [
      {
        id: 'func-014-ex1',
        question: 'Find vertical asymptote: f(x) = 1/(x-3)',
        answer: 'x = 3',
        hint: 'Where denominator = 0'
      },
      {
        id: 'func-014-ex2',
        question: 'Find horizontal asymptote: f(x) = (2x+1)/(x-1)',
        answer: 'y = 2',
        hint: 'Compare degrees of numerator and denominator'
      },
      {
        id: 'func-014-ex3',
        question: 'Domain of f(x) = (x+2)/(x²-4)',
        answer: 'All real except x = ±2',
        hint: 'Denominator cannot be zero'
      }
    ]
  },
  {
    id: 'func-015',
    title: 'Function Operations',
    description: 'Perform operations with functions: addition, subtraction, multiplication, and division',
    topic: 'Functions',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'func-015-ex1',
        question: 'If f(x)=x² and g(x)=2x, find (f+g)(3)',
        answer: '15',
        hint: 'f(3) + g(3) = 9 + 6'
      },
      {
        id: 'func-015-ex2',
        question: 'Same functions. Find (f·g)(x)',
        answer: '2x³',
        hint: 'Multiply: x² · 2x'
      },
      {
        id: 'func-015-ex3',
        question: 'Find (f/g)(2) where f(x)=x² and g(x)=x',
        answer: '2',
        hint: 'f(2)/g(2) = 4/2'
      }
    ]
  },

  // ========== LIMITS (15 activities) ==========
  {
    id: 'lim-001',
    title: 'Introduction to Limits',
    description: 'Understand the intuitive concept of limits and why they are fundamental to calculus',
    topic: 'Limits',
    difficulty: 'easy',
    estimatedTime: 20,
    completed: false,
    exercises: [
      {
        id: 'lim-001-ex1',
        question: 'As x approaches 2, what does x+1 approach?',
        answer: '3',
        hint: 'Just substitute 2'
      },
      {
        id: 'lim-001-ex2',
        question: 'lim(x→5) 3x',
        answer: '15',
        hint: 'Direct substitution'
      },
      {
        id: 'lim-001-ex3',
        question: 'What does "lim(x→a)" mean in words?',
        answer: 'The limit as x approaches a',
        hint: 'It describes behavior near a point'
      }
    ]
  },
  {
    id: 'lim-002',
    title: 'Graphical Understanding of Limits',
    description: 'Use graphs to estimate limits and understand one-sided versus two-sided limits',
    topic: 'Limits',
    difficulty: 'easy',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'lim-002-ex1',
        question: 'If f(x) has a hole at x=3 but approaches y=5, what is lim(x→3) f(x)?',
        answer: '5',
        hint: 'Limit depends on approach, not actual value'
      },
      {
        id: 'lim-002-ex2',
        question: 'Can lim(x→a) f(x) exist if f(a) is undefined?',
        answer: 'Yes',
        hint: 'Function value and limit are different'
      }
    ]
  },
  {
    id: 'lim-003',
    title: 'Numerical Approximation of Limits',
    description: 'Estimate limits using tables of values and understand convergence',
    topic: 'Limits',
    difficulty: 'easy',
    estimatedTime: 20,
    completed: false,
    exercises: [
      {
        id: 'lim-003-ex1',
        question: 'If f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, estimate lim(x→2) f(x)',
        answer: '4',
        hint: 'Values approaching from both sides'
      },
      {
        id: 'lim-003-ex2',
        question: 'Estimate lim(x→0) (sin x)/x using x=0.1, 0.01',
        answer: 'Approximately 1',
        hint: 'Famous limit, approaches 1'
      }
    ]
  },
  {
    id: 'lim-004',
    title: 'Limit Laws and Properties',
    description: 'Learn and apply the fundamental laws of limits for algebraic operations',
    topic: 'Limits',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'lim-004-ex1',
        question: 'If lim f(x)=3 and lim g(x)=5, find lim[f(x)+g(x)]',
        answer: '8',
        hint: 'Sum law: add the limits'
      },
      {
        id: 'lim-004-ex2',
        question: 'Same functions. Find lim[f(x)·g(x)]',
        answer: '15',
        hint: 'Product law: multiply the limits'
      },
      {
        id: 'lim-004-ex3',
        question: 'Find lim(x→2) [3x²]',
        answer: '12',
        hint: 'Constant multiple and power laws'
      }
    ]
  },
  {
    id: 'lim-005',
    title: 'Direct Substitution Method',
    description: 'Evaluate limits by direct substitution when the function is continuous',
    topic: 'Limits',
    difficulty: 'medium',
    estimatedTime: 25,
    completed: false,
    exercises: [
      {
        id: 'lim-005-ex1',
        question: 'lim(x→3) (x² - 2x + 1)',
        answer: '4',
        hint: 'Substitute x = 3 directly'
      },
      {
        id: 'lim-005-ex2',
        question: 'lim(x→-1) (2x³ + 5)',
        answer: '3',
        hint: '2(-1)³ + 5'
      },
      {
        id: 'lim-005-ex3',
        question: 'lim(x→4) √x',
        answer: '2',
        hint: 'Direct substitution works for continuous functions'
      }
    ]
  },
  {
    id: 'lim-006',
    title: 'Factoring to Find Limits',
    description: 'Resolve indeterminate forms by factoring and simplifying expressions',
    topic: 'Limits',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'lim-006-ex1',
        question: 'lim(x→2) (x²-4)/(x-2)',
        answer: '4',
        hint: 'Factor numerator as difference of squares'
      },
      {
        id: 'lim-006-ex2',
        question: 'lim(x→3) (x²-5x+6)/(x-3)',
        answer: '1',
        hint: 'Factor numerator first'
      },
      {
        id: 'lim-006-ex3',
        question: 'lim(x→-1) (x³+1)/(x+1)',
        answer: '3',
        hint: 'Factor using sum of cubes'
      }
    ]
  },
  {
    id: 'lim-007',
    title: 'Rationalizing Techniques',
    description: 'Use rationalization to evaluate limits involving square roots and radicals',
    topic: 'Limits',
    difficulty: 'medium',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'lim-007-ex1',
        question: 'lim(x→0) (√(x+4) - 2)/x',
        answer: '1/4',
        hint: 'Multiply by conjugate'
      },
      {
        id: 'lim-007-ex2',
        question: 'What is the conjugate of √x + 3?',
        answer: '√x - 3',
        hint: 'Change the sign between terms'
      }
    ]
  },
  {
    id: 'lim-008',
    title: 'One-Sided Limits',
    description: 'Understand and calculate left-hand and right-hand limits at specific points',
    topic: 'Limits',
    difficulty: 'medium',
    estimatedTime: 30,
    completed: false,
    exercises: [
      {
        id: 'lim-008-ex1',
        question: 'For f(x)=|x|/x, find lim(x→0⁺) f(x)',
        answer: '1',
        hint: 'From right, x>0, so |x|=x'
      },
      {
        id: 'lim-008-ex2',
        question: 'Same function. Find lim(x→0⁻) f(x)',
        answer: '-1',
        hint: 'From left, x<0, so |x|=-x'
      },
      {
        id: 'lim-008-ex3',
        question: 'Does lim(x→0) |x|/x exist?',
        answer: 'No',
        hint: 'Left and right limits must be equal'
      }
    ]
  },
  {
    id: 'lim-009',
    title: 'Infinite Limits',
    description: 'Analyze behavior of functions as they approach infinity or have vertical asymptotes',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'lim-009-ex1',
        question: 'lim(x→0⁺) 1/x',
        answer: '+∞',
        hint: 'As x gets close to 0 from right, 1/x grows'
      },
      {
        id: 'lim-009-ex2',
        question: 'lim(x→0⁻) 1/x²',
        answer: '+∞',
        hint: 'x² is always positive'
      },
      {
        id: 'lim-009-ex3',
        question: 'lim(x→2) 1/(x-2)²',
        answer: '+∞',
        hint: 'Denominator approaches 0, always positive'
      }
    ]
  },
  {
    id: 'lim-010',
    title: 'Limits at Infinity',
    description: 'Evaluate limits as x approaches positive or negative infinity',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'lim-010-ex1',
        question: 'lim(x→∞) (3x²+2)/(x²+1)',
        answer: '3',
        hint: 'Divide numerator and denominator by x²'
      },
      {
        id: 'lim-010-ex2',
        question: 'lim(x→∞) (2x+1)/(x²)',
        answer: '0',
        hint: 'Denominator grows faster'
      },
      {
        id: 'lim-010-ex3',
        question: 'lim(x→∞) (x³)/(x²+1)',
        answer: '+∞',
        hint: 'Numerator grows faster'
      }
    ]
  },
  {
    id: 'lim-011',
    title: 'Continuity of Functions',
    description: 'Understand the definition of continuity and identify discontinuities in functions',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'lim-011-ex1',
        question: 'Is f(x) = x² continuous at x=3?',
        answer: 'Yes',
        hint: 'Polynomials are continuous everywhere'
      },
      {
        id: 'lim-011-ex2',
        question: 'Is g(x) = 1/(x-2) continuous at x=2?',
        answer: 'No',
        hint: 'Undefined at x=2'
      },
      {
        id: 'lim-011-ex3',
        question: 'What are 3 conditions for continuity at x=a?',
        answer: 'f(a) exists, lim exists, they are equal',
        hint: 'Function value equals limit value'
      }
    ]
  },
  {
    id: 'lim-012',
    title: 'Intermediate Value Theorem',
    description: 'Apply the IVT to prove existence of solutions and understand its applications',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 35,
    completed: false,
    exercises: [
      {
        id: 'lim-012-ex1',
        question: 'If f is continuous, f(1)=2, f(3)=8, does f(c)=5 for some c in (1,3)?',
        answer: 'Yes',
        hint: 'IVT guarantees it'
      },
      {
        id: 'lim-012-ex2',
        question: 'Show x³-x-1=0 has a solution in (1,2)',
        answer: 'f(1)=-1<0, f(2)=5>0, IVT applies',
        hint: 'Check signs at endpoints'
      }
    ]
  },
  {
    id: 'lim-013',
    title: 'Squeeze Theorem',
    description: 'Use the squeeze theorem to find limits of functions bounded by other functions',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 45,
    completed: false,
    exercises: [
      {
        id: 'lim-013-ex1',
        question: 'If g(x) ≤ f(x) ≤ h(x) and lim g(x) = lim h(x) = L, then lim f(x) = ?',
        answer: 'L',
        hint: 'f is squeezed to L'
      },
      {
        id: 'lim-013-ex2',
        question: 'Find lim(x→0) x²sin(1/x)',
        answer: '0',
        hint: 'Squeeze between ±x²'
      }
    ]
  },
  {
    id: 'lim-014',
    title: 'Limits of Trigonometric Functions',
    description: 'Evaluate limits involving sine, cosine, and other trigonometric functions',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 40,
    completed: false,
    exercises: [
      {
        id: 'lim-014-ex1',
        question: 'lim(x→0) (sin x)/x',
        answer: '1',
        hint: 'Famous limit, memorize this'
      },
      {
        id: 'lim-014-ex2',
        question: 'lim(x→0) (1-cos x)/x',
        answer: '0',
        hint: 'Use trig identity or squeeze theorem'
      },
      {
        id: 'lim-014-ex3',
        question: 'lim(x→0) (sin 3x)/x',
        answer: '3',
        hint: 'Rewrite as 3·(sin 3x)/(3x)'
      }
    ]
  },
  {
    id: 'lim-015',
    title: "L'Hôpital's Rule Introduction",
    description: 'Learn to apply L\'Hôpital\'s Rule to evaluate indeterminate forms',
    topic: 'Limits',
    difficulty: 'hard',
    estimatedTime: 45,
    completed: false,
    exercises: [
      {
        id: 'lim-015-ex1',
        question: 'When can you use L\'Hôpital\'s Rule?',
        answer: '0/0 or ∞/∞ forms',
        hint: 'Indeterminate forms only'
      },
      {
        id: 'lim-015-ex2',
        question: 'lim(x→0) (eˣ-1)/x using L\'Hôpital',
        answer: '1',
        hint: 'Differentiate top and bottom'
      },
      {
        id: 'lim-015-ex3',
        question: 'lim(x→∞) x/eˣ',
        answer: '0',
        hint: 'Apply L\'Hôpital: 1/eˣ → 0'
      }
    ]
  },
];

// Enhanced AI recommendation algorithm with more sophisticated logic
export function getRecommendation(preferences?: {
  topics?: string[];
  difficulty?: string;
  timeAvailable?: number;
}): LearningActivity {
  let filtered = [...learningActivities];

  if (preferences) {
    // Filter by topics
    if (preferences.topics && preferences.topics.length > 0) {
      filtered = filtered.filter(act => preferences.topics?.includes(act.topic));
    }
    
    // Filter by difficulty
    if (preferences?.difficulty) {
      filtered = filtered.filter(act => act.difficulty === preferences.difficulty);
    }
    
    // Filter by time available
    if (preferences?.timeAvailable) {
      filtered = filtered.filter(act => act.estimatedTime <= (preferences.timeAvailable || 60));
    }
  }

  // If no matches found, return a random activity from all available
  if (filtered.length === 0) {
    return learningActivities[Math.floor(Math.random() * learningActivities.length)];
  }

  // Return a random activity from filtered results
  return filtered[Math.floor(Math.random() * filtered.length)];
}

// Get statistics about the activity database (useful for explainable AI)
export function getActivityStats() {
  const stats = {
    total: learningActivities.length,
    byTopic: {} as Record<string, number>,
    byDifficulty: {} as Record<string, number>,
    averageTime: 0,
    totalExercises: 0,
  };

  let totalTime = 0;
  let totalExercises = 0;

  learningActivities.forEach(activity => {
    // Count by topic
    stats.byTopic[activity.topic] = (stats.byTopic[activity.topic] || 0) + 1;
    
    // Count by difficulty
    stats.byDifficulty[activity.difficulty] = (stats.byDifficulty[activity.difficulty] || 0) + 1;
    
    // Sum time
    totalTime += activity.estimatedTime;
    
    // Count exercises
    if (activity.exercises) {
      totalExercises += activity.exercises.length;
    }
  });

  stats.averageTime = Math.round(totalTime / learningActivities.length);
  stats.totalExercises = totalExercises;

  return stats;
}

// Get activities by topic
export function getActivitiesByTopic(topic: string): LearningActivity[] {
  return learningActivities.filter(act => act.topic === topic);
}

// Get activities by difficulty
export function getActivitiesByDifficulty(difficulty: string): LearningActivity[] {
  return learningActivities.filter(act => act.difficulty === difficulty);
}
