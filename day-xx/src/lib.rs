pub fn process_part1(input: String) -> String {
    return input.to_string()
}
pub fn process_part2(input: String) -> String {
    return input.to_string()
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn it_works() {
        let example_input = fs::read_to_string("./example.txt").unwrap();
        
        let part1_result = process_part1(example_input.clone());
        let part2_result = process_part2(example_input);
        
        assert_eq!(part1_result, "");
        assert_eq!(part2_result, "");
    }
}
