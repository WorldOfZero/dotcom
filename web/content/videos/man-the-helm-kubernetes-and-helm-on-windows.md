---
title: "Man the Helm! - Kubernetes and Helm on Windows"
alias: [/v/U7H6KpCmckI/]
date: 2017-11-26
featured_image: https://i.ytimg.com/vi/U7H6KpCmckI/mqdefault.jpg

---

{{% youtube id="U7H6KpCmckI" %}}

Kubernetes (often shortened to K8S), the Greek word for a helmsman, is a tool originally developed by Google for managing cloud ready, scalable web apps. We're going to be looking at Helm, a package manager for Kubernetes that makes it possible to download and install fully configurable "charts" into your Kubernetes cluster.

Kubernetes automatically takes care of abstracting your infrastructure away from your services running on it. They ask for resources and it delivers. Kubernetes is also designed to smoothly tolerate faults. As your applications (pods) fail Kubernetes detects and moves those pods to new nodes within your cluster allowing machines to be damaged or fail without causing any systems outage.

Helm makes it possible to take prepackaged solutions for common components such as PostgreSQL, MongoDB, Grafana, Redis or even a Factorio server and publish them easily to your Kubernetes cluster. You can configure these charts to match your needs or, in this example, use the defaults already provided. This managed solution makes it extremely easy to import and install services into a Kubernetes cluster in reusable and repeatable ways. This makes it ideal for testing new services or handling the deployment or upgrade of current services.

We're going to look at how to install Helm on a Windows machine, how to configure powershell to detect the installation and how to use helm on a local minikube (simulated Kubernetes environment) instance. We'll install both Grafana and an InfluxDB instance, a metrics/monitoring dashboard and a database to hold that data. We'll look at how to expose both of these services using in-cluster communication as well as how to port-forward pods so they can be accessed outside of the cluster.

Keep in mind that Kubernetes is not suited for all environments. It's core principal of being stateless makes it less suited to data storage tasks or things that require persistence. Using it for production databases etc isn't a good idea.

Want to see more on Kubernetes or have ideas for things we can build with it? Let me know in the comments below!

Follow Kelsey Hightower on Twitter to keep up on Kubernetes development and learning: https://twitter.com/kelseyhightower

You can install Minikube on your Windows machine using Chocolatey: https://chocolatey.org/packages/Minikube or using this walkthrough from Microsoft: https://blogs.msdn.microsoft.com/wasimbloch/2017/01/23/setting-up-kubernetes-on-windows10-laptop-with-minikube/

More information about getting started with Helm: https://docs.helm.sh/using_helm/#quickstart-guide

You can browse Helm charts here or use `helm search` to search from your console.
https://kubeapps.com
https://github.com/kubernetes/helm

Discord: https://discord.gg/hU5Kq2u