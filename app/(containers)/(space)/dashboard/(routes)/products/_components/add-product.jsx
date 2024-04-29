"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Image from "next/image";
import { PlusCircle, Upload } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { ProductSchema } from "@/schemas";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export const AddProduct = () => {
  const form = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      cost: 0,
      price: 0,
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }
  return (
    <div className="grid flex-1 auto-rows-max gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="items-center gap-4">
                            <Label htmlFor="name">Name</Label>
                            <Input placeholder="Iphone 15" {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="name">Description</Label>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us a little bit about the product"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="cost"
                        render={({ field }) => (
                          <FormItem className="items-center gap-4">
                            <Label htmlFor="name">Cost</Label>
                            <Input type="number" placeholder="99" {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem className="items-center gap-4">
                            <Label htmlFor="name">Price</Label>
                            <Input type="number" placeholder="140" {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger
                          id="category"
                          aria-label="Select category"
                        >
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          <SelectItem value="electronics">
                            Electronics
                          </SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Active</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Product Image</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        // Do something with the response               console.log("Files: ", res);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </form>
      </Form>
    </div>
  );
  // return (
  //   <Dialog>
  //     <DialogTrigger asChild>
  //       <Button size="sm" className="h-7 gap-1">
  //         <PlusCircle className="h-3.5 w-3.5" />
  //         <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
  //           Add Product
  //         </span>
  //       </Button>
  //     </DialogTrigger>
  //     <DialogContent className="sm:max-w-[425px]">
  //       <Form {...form}>
  //         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  //           <DialogHeader>
  //             <DialogTitle>Add new product</DialogTitle>
  //           </DialogHeader>
  //           <FormField
  //             control={form.control}
  //             name="name"
  //             render={({ field }) => (
  //               <FormItem className="items-center gap-4">
  //                 <Label htmlFor="name">Name</Label>
  //                 <Input placeholder="Iphone 15" {...field} />
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="description"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Description</FormLabel>
  //                 <FormControl>
  //                   <Textarea
  //                     placeholder="Tell us a little bit about the product"
  //                     className="resize-none"
  //                     {...field}
  //                   />
  //                 </FormControl>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />

  //           <FormField
  //             control={form.control}
  //             name="cost"
  //             render={({ field }) => (
  //               <FormItem className="items-center gap-4">
  //                 <Label htmlFor="name">Cost</Label>
  //                 <Input type="number" placeholder="99" {...field} />
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="price"
  //             render={({ field }) => (
  //               <FormItem className="items-center gap-4">
  //                 <Label htmlFor="name">Price</Label>
  //                 <Input type="number" placeholder="140" {...field} />
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <UploadDropzone
  //             endpoint="imageUploader"
  //             onClientUploadComplete={(res) => {
  //               // Do something with the response
  //               console.log("Files: ", res);
  //               alert("Upload Completed");
  //             }}
  //             onUploadError={(error) => {
  //               // Do something with the error.
  //               alert(`ERROR! ${error.message}`);
  //             }}
  //           />
  //           <DialogFooter className="gap-2">
  //             <Button type="submit">Save changes</Button>
  //             <DialogClose asChild>
  //               <Button type="button" variant="secondary">
  //                 Close
  //               </Button>
  //             </DialogClose>
  //           </DialogFooter>
  //         </form>
  //       </Form>
  //     </DialogContent>
  //   </Dialog>
  // );
};
