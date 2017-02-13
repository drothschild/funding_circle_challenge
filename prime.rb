
def is_prime?(num)
  return false if num <= 1
  for d in 2..Math.sqrt(num)
    if (num % d) == 0
      return false
    end
  end
  true
end

def next_prime(num)
  num += 1
  num = num + 1 until is_prime?(num)
  num
end

def get_primes(qty)
  n = 2
  primes = []
  (qty).times do 
    primes << n
    n = next_prime(n)
  end
  primes
end
  

def mult_table(nums)
  table = [[' '] + nums]
  nums.each do |num|
    row = [num]
    for i in 0..nums.length - 1
      row << num * nums[i]
    end
    table << row
  end
  table
end

def print_table(table)
  table.each do |row|
    row.each do |num|
      # Have to accomodate the blank space at the beginning of the multiplication 
      if num == " "
        $stdout.write ("    ")
      else
        $stdout.write("%3d " % num)
      end
    end
    $stdout.write ("\n")
  end
end

#////Driver Code

beginning = Time.now
primes = get_primes(10)
mult = mult_table(primes)
print_table(mult)
$stdout.write (Time.now - beginning)
$stdout.write " seconds \n"


#///////////////////////// TESTING

require 'test/unit'

class PrimesTest < Test::Unit::TestCase
  def test_isPrime_should_return_true_for_prime_numbers_false_otherwise
    test = is_prime?(2)
    answer = true
    assert_equal(test, answer)

    test = is_prime?(6)
    answer = false
    assert_equal(test, answer)
  end

  def test_nextPrime_should_return_next_prime_number
    test = next_prime(3)
    answer = 5
    assert_equal(test, answer)

    test = next_prime(10)
    answer = 11
    assert_equal(test, answer)
  end

  def test_get_primes
    test = get_primes(1) 
    answer = [2]
    assert_equal(test, answer)

    test = get_primes(10) 
    answer = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    assert_equal(test, answer)
  end
end

