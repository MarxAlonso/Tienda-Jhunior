//import { useState } from "react";

/*export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Todos los campos son obligatorios.");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Introduce un correo válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", role: "Cliente", message: "" }); // Reiniciar formulario
      } else {
        console.error(result);
        setFormError(result.error || "Hubo un error al enviar el correo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-2 min-h-screen flex items-center justify-center bg-stone-200 dark:bg-gray-900 py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full space-y-6"
      >
        <h2 className="text-3xl font-semibold text-white text-center mb-4">
          Contáctanos
        </h2>

        {formError && <p className="text-red-500 text-center">{formError}</p>}
        {isSuccess && (
          <p className="text-green-500 text-center">
            Mensaje enviado con éxito.
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Tu Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white"
            placeholder="Introduce tu nombre"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Tu Correo:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white"
            placeholder="Introduce tu correo"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Mensaje:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white"
            placeholder="Introduce tu mensaje"
            disabled={isSubmitting}
          />
        </div>

        <div className="text-center mt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </div>
  );
};
*/
