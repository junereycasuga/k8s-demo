# k8s Demo

These repository contains example files to deploy a simple node application to a Kubernetes cluster

### `app` directory

This directory contains the NodeJs application used to deploy in a Kubernetes cluster. A docker image of this application has been built already and published in [Dockerhub](https://hub.docker.com/r/junereycasuga/node-demo).

### service.yaml

Used to create the service. You can create this service in your Kubernetes cluster by running the following command:

```bash
kubectl apply -f service.yaml
```

### deployment.yaml

Used to create the deployment. You can create this deployment in your Kubernetes cluster by running the following command:

```bash
kubectl apply -f deployment.yaml
```

Once you have applied both file, you can run `kubectl get svc` to see the External IP Address of the `node-service` we have just created. You can visit that address to check if the our app is successfully deployed in the Kubernetes cluster.
