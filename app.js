const family = {
  name: "father-1",
  age: "75",
  child: {
    name: "child",
    age: "40",
    child: {
      name: "grandchild",
      age: "40",
    },
  },
};

const family2 = {
  name: "father-2",
  age: "75",
  children: [
    {
      name: "child-1",
      age: "40",
      children: [
        {
          name: "child-1",
          age: "20",
        },
      ],
    },
    {
      name: "child-2",
      age: "32",
      children: [
        {
          name: "child-1",
          age: "16",
        },
      ],
    },
  ],
};

const array = [];
const array2 = [];
// array.push(family);
// const item = array.map((item)=>{
//     array2.push(item.name)
//     array2.push(item.child.name)
//     array2.push(item.child.child.name)

// })
// console.log(array2);

// for (let key in family) {
//     console.log(`key: ${key}, value: ${family[key]}`);
//     if(family.child ===){
//         array2.push(family.child)
//     }

// }
// console.log(array2);

function printFamily(family) {
  if (!family) return;

  console.log(family.name);
  if (family.child) {
    printFamily(family.child);
  }
}

printFamily(family);

const printFamilyWithChildren = (family) => {
  if (!family) return;

  console.log(family.name);
  if (family.children) {
    for (let i = 0; i < family.children.length; i++) {
      const child = family.children[i];
      printFamilyWithChildren(child);
    }
  }
};

printFamilyWithChildren(family2);

const binaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
      left: {
        value: 8,
      },
      right: {
        value: 9,
      },
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
    },
  },
};

const printBinaryTree = (binaryTree) => {
  if (!binaryTree) return;

  console.log(binaryTree.value);
  if (binaryTree.left) {
    printBinaryTree(binaryTree.left);
  }
  if (binaryTree.right) {
    printBinaryTree(binaryTree.right);
  }
};

printBinaryTree(binaryTree);

const directories = {
  name: "root",
  children: [
    {
      name: "user/",
      children: [
        {
          name: "bin/",
          children: [
            {
              name: "sumNameFolder1/",
              children: [],
            },
            {
              name: "sumNameFolder2/",
              children: [
                {
                  name: "sumNameFolder3/",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "lib/",
          children: [],
        },
        {
          name: "local/",
          children: [],
        },
        {
          name: "share/",
          children: [],
        },
      ],
    },
    {
      name: "dev/",
      children: [],
    },
    {
      name: "etc/",
      children: [],
    },
    {
      name: "home/",
      children: [],
    },
    {
      name: "sbin/",
      children: [],
    },
    {
      name: "tmp/",
      children: [],
    },
    {
      name: "var/",
      children: [],
    },
  ],
};

const showFolders = (directories) => {
  if (!directories) return;
  console.log(directories.name);
  if (directories.children) {
    for (let i = 0; i < directories.children.length; i++) {
      const child = directories.children[i];
      console.log(child.name);
      showFolders(child);
    }
  }
};

showFolders(directories);

document.getElementById("root").innerHTML += `
<ul>
    <li>
        <a href="#">${directories.name}</a>
        <ul>
           
               
               
                    <li>
                       <a href="#">${directories.children[0].name}</a>
                       <ul>
                       <li><a href="#">${directories.children[0].children[0].name}</a>
                       <ul>
                       <li>
                          <a href="#">${directories.children[0].children[0].children[0].name}</a>
                       </li>
                       <li>
                       <a href="#">${directories.children[0].children[0].children[1].name}</a>
                       <ul>
                       <li><a href="#">${directories.children[0].children[0].children[1].children[0].name}</a></li>
                       </ul>
                       </li>
                       </ul>
                       </li>
   
                       <li>
                           <a href="#">${directories.children[0].children[1].name}</a>
                       </li>
                       <li>
                       <a href="#">${directories.children[0].children[2].name}</a>
                   </li>
                   <li>
                   <a href="#">${directories.children[0].children[3].name}</a>
               </li>
                      
                   </ul>
                    </li>

                    <li>
                        <a href="#">${directories.children[1].name}</a>
                    </li>
                    <li>
                    <a href="#">${directories.children[2].name}</a>
                   </li>
                   <li>
                   <a href="#">${directories.children[3].name}</a>
                </li>
                <li>
                <a href="#">${directories.children[4].name}</a>
             </li>
             <li>
             <a href="#">${directories.children[5].name}</a>
            <li>
                <a href="#">${directories.children[6].name}</a>
        </ul>
    </li>
</ul>
`;
