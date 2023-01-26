# INtellipaat Demo

### Commands

```bash
cd backend-node
docker image build -t akilan/backend-node:v1 .
kubectl apply -f k8s/

cd frontend-react
docker image build -t akilan/frontend-react:v1 .
kubectl apply -f k8s/

#Logs
kubectl logs -n intellipaat pods/backend-api-649d58b696-dfjkl --follow
kubectl exec -it -n intellipaat pods/frontend-ui-67d4c8987c-gddt6 -- bash

kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl port-forward svc/argocd-server -n argocd 8080:443
```
