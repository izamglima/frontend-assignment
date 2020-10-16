import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as THREE from 'three';
import { OBJLoader } from 'node_modules/three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  renderer = new THREE.WebGLRenderer();
  camera = null;
  mesh = null;
  object;
  objectList;
  objectDetails;
  loader = new OBJLoader();
  scene = new THREE.Scene();

  constructor(private route: ActivatedRoute) {
    this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 1, 100);
    this.camera.position.z = 100;

    this.loader.load('./assets/cube.obj', function(object) {
        console.log(object);
        this.scene.add(object)
      },
      // called when loading is in progresses
      function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      // called when loading has errors
      function ( error ) {
        console.log( 'An error happened' );
      }
    );
     this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera );
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, 600);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  ngOnInit(): void {
    let retrievedData;

    this.object = this.route.snapshot.params.name;

    retrievedData = localStorage.getItem('objectDetails');
    this.objectList = JSON.parse(retrievedData).map(objectDetail => JSON.parse(objectDetail));

    this.objectDetails = this.objectList.find(test => test.text = this.object);
    console.log(this.objectDetails);
  }

}
